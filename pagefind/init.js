new PagefindUI({
  element: '#search',
  showImages: false,
  translations: {
    placeholder: '',
    zero_results: 'No matches found.'
  }
})

if (document.getElementById('full-page-search')) {
  new PagefindUI({
    element: '#full-page-search',
    showImages: false,
    translations: {
      placeholder: 'Search all tickets and milestones',
      zero_results: 'No matches found.'
    }
  })
}
