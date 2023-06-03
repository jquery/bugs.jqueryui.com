<%@ Page Inherits="System.Web.Mvc.ViewPage<intranet.Helpers.PaginatedList<intranet.Models.Timesheet>>" 
         Language="C#" MasterPageFile="~/Views/Shared/Site.Master" %>

<asp:Content ID="indexTitle" ContentPlaceHolderID="TitleContent" runat="server">
	Decovar Orient : Intranet - Timesheets
</asp:Content>

<asp:Content ID="indexLocalHeader" ContentPlaceHolderID="LocalisedHeadContent" runat="server">
    <script type="text/javascript" language="javascript" src="<%= Url.Content("~/Scripts/jquery.confirm-1.3.js") %>"></script>
    <link href="<%= Url.Content("~/Content/styles/timesheet.css") %>" rel="stylesheet" type="text/css" />    
</asp:Content>

<asp:Content ID="indexContent" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Timesheets</h2>
    <%= Html.ValidationSummary("Timesheet entry unsuccessful. Please correct the errors and try again.") %>
    
    <div id="timesheet-form">
    <% using (Html.BeginForm()) { %>
        <% if (!string.IsNullOrEmpty(ViewData["userId"].ToString()))
           { %>          
            <fieldset id="fieldset">
                <legend>Enter new hours:</legend>

                <%=Html.Hidden("userId", ViewData["userId"])%>
                <%=Html.Hidden("timesheetCalMinDate", ViewData["timesheetCalMinDate"])%>
                <%=Html.Hidden("timesheetCalMaxDate", ViewData["timesheetCalMaxDate"])%>
                <%=Html.Hidden("timesheetHrsValue", ViewData["timesheetHrsValue"])%>
                <%=Html.Hidden("timesheetHrsMin", ViewData["timesheetHrsMin"])%>
                <%=Html.Hidden("timesheetHrsMax", ViewData["timesheetHrsMax"])%>
                <%=Html.Hidden("timesheetHrsStep", ViewData["timesheetHrsStep"])%>  
                
                <!-- Data Collection -->             
                <div class="deLine1">
                    <label class="label" for="dte" title="Date" id="lblDte">Date:</label>
                    <%=Html.TextBox("dte")%>
                    <label class="label" for="project" title="Project" id="lblProject">Project:</label>
                    <%=Html.DropDownList("projectId",(IEnumerable<SelectListItem>)ViewData["projects"],"")%>
                    <label class="label" for="hours" title="Hours" id="lblHours">Hours:</label>    
                    <%=Html.TextBox("hours")%>
                    <div id="hoursSlider"></div>
                </div>
                <div class="deLine2">
                    <label class="label" for="classification" title="Classification" id="lblClassification">Classification:</label>      
                    <%=Html.DropDownList("classificationId",(IEnumerable<SelectListItem>)ViewData["classifications"],"")%>
                    <label class="label" for="stage" title="Stage" id="lblStage">Stage:</label>      
                    <%=Html.TextBox("stage")%>
                    <label class="label" for="billable" title="Billable" id="lblBillable">Billable:</label>          
                    <%=Html.CheckBox("billable", true)%>
                </div>
                    <div class="deLine3">
                    <label class="label" for="notes" title="Notes" id="lblNotes">Notes:</label>         
                    <%=Html.TextArea("notes")%>
                    <input type="submit" value="Save" id="submit" class="button"/>
                    <input type="submit" value="Reset" id="reset" class="button"/>
                </div>
                <!-- // Data Collection -->    
            </fieldset>

            <!-- Data Grid -->
            <table id="listHours" class="timesheetGrid">
            <tr>
                <th class="dtetitle">Date</th>
                <th class="prjtitle">Project</th>
                <th class="hrstitle">Hours</th>
                <th class="clstitle">Classification</th>   
                <th class="stgtitle">Stage</th>  
                <th class="ntstitle">Notes</th>   
                <th class="biltitle">Billable</th>                          
                <th class="ctrtitle">&nbsp;</th>
            </tr>        
            
            <% foreach (var item in Model) { %>    
                <tr class="timesheetGridItem">
                    <td class="dte">
                        <%= Html.Encode(String.Format("{0:D}", item.dte)) %>
                    </td>
                    <td class="prj">
                        <%= Html.Encode(item.Project.abbr) %>
                    </td>
                    <td class="hrs">
                        <%= Html.Encode(item.hours) %>
                    </td>
                    <td class="cls">
                        <%= Html.Encode(item.Classification.abbr) %>
                    </td>            
                    <td class="stg">
                        <%= Html.Encode(item.Stage.abbr) %>
                    </td>
                    <td class="nts">
                        <%= Html.Encode(item.notes) %>
                    </td>
                    <td class="bil">
                        <%= Html.CheckBox("billable", Convert.ToBoolean(item.billable), new { disabled="disabled" } ) %>
                    </td>            
                    <td class="ctr">
                        <%= Html.ActionLink(".", "Edit", new { timesheetId = item.id, pg = Model.PageIndex }, 
                                new {@class="edit", @title="Edit"}) %>
                        <%= Html.ActionLink(".", "Delete", new { timesheetId = item.id },
                                new { @class = "delete", @title = "Delete" })%>
                   </td>
                </tr>    
            <% } %>
            <% if (Model.Count == 0)
               { %> 
                    <tr>
                        <td class="nohours" colspan="8">No hours recorded for this period</td>
                    </tr>
            <% } %>        
            </table>

            <div class="pagination">
                <div style="float: right">
                    <%= Html.Encode(ViewData["page"]) %>
                </div>
                
                <% if (Model.HasPreviousPage)
                   { %>
                    <%= Html.RouteLink("<", "PaginatedTimesheets", 
                        new { page = (Model.PageIndex - 1) }, new { @class="previous", @title="Previous page" })%>                    
                <% } %>

                <% if (Model.HasNextPage) { %>                              
                    <%= Html.RouteLink(">", "PaginatedTimesheets",
                        new { page = (Model.PageIndex + 1) }, new { @class="next", @title="Next page" })%>  
                <% } %>          
            </div>
            <!-- // Data Grid -->    
            
            <label class="label" for="viewByPeriod" title="View by period" id="viewBy:">View by period:</label>
            <%=Html.DropDownList("viewByPeriod") %> 
            
        <% }else{ %>
            <h3 style="color: #c00">New User </h3>
            <p style="color: #c00">You are a new timesheet user and your timesheets have not yet been initialised.  
                                   Please contact your team supervisor or a systems administrator for assistance.</p>
        <% } %>               
    <%  } %>
    </div>
    
</asp:Content>

<asp:Content ID="indexLocalFooter" ContentPlaceHolderID="LocalisedFooterContent" runat="server">
<script type="text/javascript" language="javascript" src="<%= Url.Content("~/Scripts/date.format.js") %>"></script>
<script type="text/javascript" language="javascript" src="<%= Url.Content("~/Scripts/genericTimesheet.js") %>"></script>
<script language="javascript" type="text/javascript">
    // Jquery UI functionality
    $(document).ready(function () {
        // run generic form setup
        timesheet.setup();
        // predefine date value
        $("#dte").val(function () {
            var now = new Date();
            return now.format("dd/mm/yyyy");
        });        
        // reset form
        $("#reset").click(function () {
            $(":input", "form")
                .not(":button, :submit, :reset, :hidden, :select")
                .val("")
                .removeAttr("checked")
                .removeAttr("selected");
        });
        // add action link functionality
        $(".delete").confirm({
            msg: 'Are you sure you wish to delete this entry?',
            dialogShow: 'fadeIn',
            dialogSpeed: 'fast',
            buttons: {
                wrapper: '<button></button>',
                separator: ''
            }
        });
        // format additional combos
        $("#viewBy").combobox();
    });
</script>
</asp:Content>