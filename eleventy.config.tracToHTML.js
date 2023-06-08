const rasterisks = /^\s*\* /
const rheaders = /^ *(\=+) *([^\n\r]+) *\1? *$/
let listStarted = false

function escapeHTML(string) {
  return string.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

module.exports = function tracToHTML(text) {
  const codes = []
  const pres = []
  return (
    escapeHTML(text)
      // Newlines have extra escapes in the strings
      .replace(/\\\n/g, '\n')
      // Replace `` with <code> tags
      .replace(/`([^\r\n`]+?)`/g, (_match, code) => {
        codes.push(code) // Save the code for later
        return `<code></code>`
      })
      // Replace {{{ }}} with <pre> tags
      .replace(/{{{([^]+?)}}}/g, (_match, code) => {
        // Save the code for later
        pres.push(
          // Remove language hints
          code.replace(/^#!\w+\r?\n/, '')
        )
        return `<pre class="wiki"></pre>`
      })
      // Linkify http links outside brackets
      .replace(/(^|\s)(https?:\/\/[^\s]+)/g, function (_match, space, url) {
        return `${space}<a href="${url}" class="ext-link"><span class="icon"></span>${url}</a>`
      })
      // Linkify http links in brackets
      .replace(
        /(^|\s)\[(https?:\/\/[^\s\]]+)(?:\s+([^\]]+))?\]/g,
        function (_match, space, url, text) {
          return `${space}<a href="${url}" class="ext-link"><span class="icon"></span>${
            text || url
          }</a>`
        }
      )
      // Linkify hash links in brackets
      .replace(
        /(^|\s)\[(#[^\s\]]+)(?:\s+([^\]]+))?\]/g,
        function (_match, space, url, text) {
          return `${space}<a href="${url}" class="ext-link"><span class="icon"></span>${
            text || url
          }</a>`
        }
      )
      // Linkify CamelCase links in brackets
      .replace(
        /(^|\s)\[([A-Z][a-z]+[A-Z][\w#-]+)(?:\s+([^\]]+))?\]/g,
        function (_match, space, page, text) {
          return `${space}<a href="/wiki/${page}">${text || page}</a>`
        }
      )
      // Linkify trac links
      .replace(
        /(^|\s)(?:\[trac:([^ ]+) "([^"]+)"\])|(?:\[trac:([^\s\]]+)(?: ([^\]]+))?\])/g,
        function (_match, space, quotepage, quotedtext, page, text) {
          return `${space}<a href="https://trac.edgewall.org/intertrac/${
            quotepage || page
          }" class="ext-link"><span class="icon"></span>${
            quotedtext || text || page
          }</a>`
        }
      )
      // Linkify ticket references (avoid trac ticket links)
      .replace(/#(\d+)(?!<=>)/g, `<a href="/ticket/$1">$&</a>`)
      // Linkify CamelCase to wiki
      .replace(
        /(^|\s)(!)?([A-Z][a-z]+[A-Z]\w+(?:#\w+)?)(?!\w)/g,
        function (_match, space, excl, page) {
          if (excl) {
            return `${space}${page}`
          }
          return `${space}<a href="/wiki/${page}">${page}</a>`
        }
      )
      // Convert ---- to <hr>
      .replace(/^--+$/gm, '<hr />')
      // Replace three single quotes with <strong>
      .replace(/'''([^']+)'''/g, '<strong>$1</strong>')
      // Replace double newlines with paragraphs
      .split(/(?:\r?\n)/g)
      .map((line) => {
        let ret = ''
        if (listStarted && !rasterisks.test(line)) {
          listStarted = false
          ret += '</ul>'
        }
        if (!line.trim()) {
          return ret
        }
        if (line.startsWith('<pre')) {
          return ret + line
        }
        // Blockquotes
        if (line.startsWith('> ')) {
          return ret + `<blockquote>${line.slice(2)}</blockquote>`
        }
        // Headers
        if (rheaders.test(line)) {
          return (
            ret +
            line.replace(rheaders, (_all, equals, content) => {
              const level = equals.length
              return `<h${level}>${content}</h${level}>`
            })
          )
        }
        if (rasterisks.test(line)) {
          line = line.replace(
            /(^|\s+)\* ([^\n]+)/g,
            `$1${listStarted ? '' : '<ul>'}<li>$2</li>`
          )
          listStarted = true
          return ret + line
        }
        return ret + `<p>${line}</p>`
      })
      .join('')
      // Reinsert code
      .replace(/<code><\/code>/g, () => {
        const code = codes.shift()
        return `<code>${code}</code>`
      })
      // Reinsert pres
      .replace(/<pre class="wiki"><\/pre>/g, () => {
        const code = pres.shift()
        return `<pre class="wiki">${code}</pre>`
      })
  )
}
