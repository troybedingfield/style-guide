
export const Banners = [
    {
        title: "Banners",
        containerhide: [
            { section: "banners", meta: "banners" },
        ],
        rpocomponenthide: [
            { section: "banners", meta: "banners RPO Component RPOComponent" },
        ],
        current: { current: "Current:", meta: "banners current" },
        ideal: { ideal: "Ideal:", meta: "banners ideal" },
        banners: [
            { type: "informational", class: "light-blue", title: "Informational", message: "This is an informational banner", meta: "banners" },
            { type: "success", class: "", title: "Success", message: "This is an success banner", meta: "banners" },
            { type: "warning", class: "", title: "Warning", message: "This is an warning banner", meta: "banners" },
            { type: "warningSingle", class: "", title: "3 warning messages", message: "3 warning messages", body: "<ul><li>2 budget <i class='icon-link'></i></li><li>1 Employee past due <i class='icon-link'></i></li><li>10 employees due in 7 days <i class='icon-link'></i></li></ul>", li1: "2 budget", li1class: "icon-link", li2: "1 Employee past due", li2class: "icon-link", li3: "10 employees due in 7 days", li3class: "icon-link", meta: "banners" },
            { type: "multipleMixed", class: "", title: "This plan has 3 errors and 1 warning", message: "3 warning messages", body: "<ul><li>12 employees past due <i class='icon-link'></i></li><li>20 employees due in 7 days <i class='icon-link'></i></li><li>2 budget errors <i class='icon-link'></i></li><li>2 budget warnings <i class='icon-link'></i></li></ul>", li1: "12 Employees past due", li1class: "icon-link", li2: "20 employees due in 7 days", li2class: "icon-link", li3: "2 budget errors", li3class: "icon-link", li4: "2 budget warnings", li4class: "icon-link", meta: "banners" },
            { type: "expand", class: "", title: "This plan has 3 errors and 1 warning", message: "3 warning messages", body: "<ul id='_InformationList'></ul><ul id='_InformationListClientSide'><li>The SSN for this employee is already in use by the following employee(s). This will affect wage base calculations and cause the employee to receive multiple W2’s. Corrective action is needed.<br><br><div><table class='MessageHandlerInfoTable table table-condensed'><tbody><tr><th>Name</th><th>SSN</th><th>Tax Form</th></tr><tr><td>Ming Na</td><td>XXX-XX-XXXX</td><td>W2</td></tr></tbody></table></div></li></ul>", li1: "The SSN for this employee is already in use by the following employee(s). This will affect wage base calculations and cause the employee to receive multiple W2’s. Corrective action is needed.", head1: "Name", head2: "SSN", head3: "Tax Form", li2: "Ming Na", li3: "123-45-6789", li4: "W2", meta: "banners" },
            { type: "error", class: "", title: "Error", message: "This is an error banner", meta: "banners" },

        ],
        currentideal: [
            { type: "errorcurrent", class: "", title: "Error", message: "This is an error banner", meta: "banners current" },
            { type: "ideal", class: "", title: "Error", message: "This is an error banner", meta: "banners ideal" },
        ],
        sections: [
            { section: "banners", title: "Banners", body: "Typically displayed at the top of the page or within a sub-header. Banners can be interacted with, such as dismissing, expand/collapsing or paging through multiple messages. If 1+ messages exist, display a single banner with caret on left side to display more. Banner messages should be simple, concise and describe a clear message.", example: "", meta: "banners" },
            { section: "expand", title: "Expand and Collapse Banners", body: "Please note the title is a bolder font weight and optional. This is to separate the title from description.\n\nThe text can wrap to multiple lines, do not truncate text. The containers is closed by default and expands in a downward fashion when the left caret has been selected.", example: "", meta: "banners" },
            { section: "multipleSingle", title: "Multiple Messages (Single Type)", body: "Display the highest priority items first, or list in chronological order\n\n Collapsed State - display number of warnings\n Expanded State - Display all items in list format\nAllow list to be hot linked to fields below", example: "", meta: "banners" },
            { section: "multipleMixed", title: "Multiple Messages (Mixed Types)", body: "Display the highest priority items first, or list in chronological order\n\nCollapsed State - display number of errors, warnings or informational messages on top line\nExpanded State - Display all items in list format\nAllow list to be hot linked to fields below ", example: "", meta: "banners" },
            { section: "action", title: "Banner with Action Button", body: "Place at top of the page. When text is long, wrap to next row. Place a button on the right side of the banner. Clicking on button jumps directly to item/page. Upon clicking button display popup", example: "", meta: "banners" },
            { section: "page", title: "Page Level Banner Placement", body: "Position the banner at the top of the page just below the title and 3rd level navigation", example: "", meta: "banners" },
            { section: "toast", title: "Toast Messages", body: "Displayed for short period of time, manually or self-dismissing.", example: "", meta: "banners" },
            { section: "full", title: "Full Page Progress Indicators", body: "A translucent black background overlays the the entire screen.\n\nBar starts from the left side and continually moves to the right so it appears the system is still active.\n\nGood to use for long loading times along with the inability to exit out of the operation.", example: "", meta: "banners" },
            { section: "rpo-component", title: "readyX Component", body: "", example: "", meta: "banners RPO Components RPOComponents" },
            { section: "readyxlibrary", title: "readyX Component Library", body: "https://atl0dev81web.dev.proliant.org/readyXviewer/", example: "", meta: "banners RPO Components RPOComponents" },
        ],
        code: [
            //     {name: "angular", example: '\n <div id="_ErrorPanel" class="messageSmall error alert alert-danger" style="display: none;">\n\n<div class="icon"></div>\n<h5><i class="collapseExpandSmall icon-expand expand pull-left"></i><span class="title">Error</span></h5>\n<div class="messageList">\n<ul id="_ErrorList"></ul>\n<ul id="_ErrorListClientSide"></ul>\n</div>\n\n</div>\n\n<div id="_ReportsPanel" class="messageSmall reports alert alert-info" style="display: none;">\n\n<div class="icon"></div>\n<div id="reportsPanelClose"></div>\n<h5><em>Completed Reports</em></h5>\n<div class="messageList">\n<ul id="_ReportsList">\n<li>Any report you run that is flagged to notify you upon completion will show up in this window.</li>\n</ul>\n</div>\n<div class="Refresh" title="Refresh" onclick="PollReportJobs();"></div>\n\n</div>\n\n<div id="_WarningPanel" class="messageSmall warning alert alert-warning" style="display: none;">\n\n<div class="icon"></div>\n\n<h5><i class="collapseExpandSmall icon-expand expand pull-left"></i><span class="title">Warning</span></h5>\n<div class="messageList">\n<ul id="_WarningList"></ul>\n<ul id="_WarningListClientSide"></ul>\n</div>\n\n</div>\n\n<div id="_InformationPanel" class="messageSmall information alert alert-info" style="display: none;">\n\n<div class="icon"></div>\n\n<h5><i class="collapseExpandSmall icon-expand expand pull-left"></i><span class="title">Information</span></h5>\n<div class="messageList">\n<ul id="_InformationList"></ul>\n<ul id="_InformationListClientSide"></ul>\n</div>\n\n</div>'},
            //     {name:"Warning",example: 'this.warningPanel = $("[id$=\'_WarningPanel\']");\n\
            // this.warningListClientSide = $("[id$=\'_WarningListClientSide\']");\n\
            // this.warningListServerSide = $("[id$=\'_WarningList\']");\n\ \n\this.bodyContainer = $("#container");\n\ \n\
            // addWarningMessage(message: string) {\n\
            // var messagePanel = $("[id$=\'_WarningPanel\']");\n\
            // var messageList = $("[id$=\'_WarningListClientSide\']");\n\ \n\
            // if (message.length > 0) {\n\
            // messagePanel.show();\n\
            // messageList.append(`<li>${message}</li>`);\n\
            // }\n\
            // }\n\ \n\
            //  displayMessages(messageObj: any) {\n\
            // if (messageObj === null || messageObj === undefined) {\n\
            // return;\n\
            // }\n\ \n\
            //  this._errors = messageObj["Errors"] || messageObj["errors"] || [];\n\
            // this._warnings = messageObj["Warnings"] || messageObj["warnings"] || [];\n\
            // this._messages = messageObj["Messages"] || messageObj["messages"] || [];\n\ \n\
            //  if (this._errors.length === 0 && this._warnings.length === 0 && this._messages.length === 0) {\n\
            // return;\n\
            // }\n\ \n\
            // let labels = document.getElementsByTagName("label"), innerText, errorInput;\n\
            // // Clear out Warnings\
            // this.warningListClientSide.empty();\n\
            // // Populate Warnings from the object\n\
            // try {\n\ \n\ if (this._warnings !== undefined && this._warnings !== null && this._warnings.length > 0) {\n\
            //  var showPanel = false;\n\
            // for (c = 0; c < this._warnings.length; c++) {\n\
            // if (this._warnings[c].length > 0) {\n\
            // this.warningListClientSide.append(\'<li>\' + this._warnings[c] + \'</li>\');\n\
            //  showPanel = true;\n\
            //  }\n\
            //  }\n\
            //  if (showPanel === true) {\n\
            // this.warningPanel.show();\n\
            // }\n\
            // }\n\
            // } catch (exception) { }\n\ \n\
            //  // hide panels is no serverside and client side errors\n\
            // this.hideEmptyPanels();\
            // }'},
            //     {name:"Informational",example: 'this.messagePanel = $("[id$=\'_InformationPanel\']");\n\
            //     this.messageListClientSide = $("[id$=\'_InformationListClientSide\']");\n\
            //     this.messageListServerSide = $("[id$=\'_InformationList\']");', meta: "banners"},
            //     {name: "Error",example: 'this.errorPanel = $("[id$=\'_ErrorPanel\']");\n\
            //     this.errorListClientSide = $("[id$=\'_ErrorListClientSide\']");\n\
            //     this.errorListServerSide = $("[id$=\'_ErrorList\']");', meta: "banners"},
            {
                name: "Informational", example: 'Example:\n\n <pro-banner text="Primary Text" [detailMessages]="[ "Detail Message #1", "Detail Message #2", "Detail Message #3" ]">\
</pro-banner>'},
            {
                name: "Warning", example: 'Example:\n\n <pro-banner type="warning" text="Primary Text" [detailMessages]="[ "Detail Message #1", "Detail Message #2", "Detail Message #3" ]">\
</pro-banner>'},
            {
                name: "Success", example: 'Example:\n\n <pro-banner type="success" text="Primary Text" [detailMessages]="[ "Detail Message #1", "Detail Message #2", "Detail Message #3" ]">\
</pro-banner>', meta: "banners"
            },
            {
                name: "Error", example: 'Example:\n\n <pro-banner type="error" text="Primary Text" [detailMessages]="[ "Detail Message #1", "Detail Message #2", "Detail Message #3" ]">\
</pro-banner>', meta: "banners"
            },

        ],
        toastrcode: [
            { name: "user-feedback ts", example: 'async actionSubmit() {\nthis.submitActionInProgress = true;\nconst success = await this._userFeedbackService.submitFeedback(this.userInput);\n\nif (success) {\nthis._toastr.success(\'Feedback successful!\');\nthis.actionClose();\n} else {\nthis._toastr.error(\'There was a problem with your request!\');\n} this.submitActionInProgress = false;\n}' },
            { name: "messaging", example: 'this._toastr = toastr !== \'undefined\' && toastr || <any>{};\nthis._toastr.options = {\n"showDuration": "500",\n"hideDuration": "500",\n"timeOut": "2000",\n"extendedTimeOut": "1000",\n// "closeButton": false,\n// "debug": false,\n// "newestOnTop": false,\n// "progressBar": false,\n// "positionClass": "toast-top-right",\n// "preventDuplicates": false,\n// "onclick": null,\n// "showEasing": "swing",\n// "hideEasing": "linear",\n// "showMethod": "fadeIn",\n// "hideMethod": "fadeOut"\n};\n\nthis.errorPanel = $("[id$=\'_ErrorPanel\']");\nthis.errorListClientSide = $("[id$=\'_ErrorListClientSide\']");\nthis.errorListServerSide = $("[id$=\'_ErrorList\']");\n\nthis.warningPanel = $("[id$=\'_WarningPanel\']");\nthis.warningListClientSide = $("[id$=\'_WarningListClientSide\']");\nthis.warningListServerSide = $("[id$=\'_WarningList\']");\n\nthis.messagePanel = $("[id$=\'_InformationPanel\']");\nthis.messageListClientSide = $("[id$=\'_InformationListClientSide\']");\nthis.messageListServerSide = $("[id$=\'_InformationList\']");\n\nthis.validationSummaryPanel = $("[id$=\'_validationSummary\']");\n\nthis.bodyContainer = $("#container");\n}\n\nflashSuccess(msg: string, title?: string) {\nthis._toastr.success(msg, title);\n}\n\nflashWarning(msg: string, title?: string) {\nthis._toastr.warning(msg, title);\n}\n\nflashError(msg: string, title?: string) {\nthis._toastr.error(msg, title);\n}\n\npublic configureService( configuration: MessagingServiceConfigModel )\n{\nif ( configuration ) {\nif ( configuration.bodyContainerSelector )\nthis.bodyContainer = $( configuration.bodyContainerSelector );\n\nif ( configuration.errorPanel ) {\nif ( configuration.errorPanel.errorPanelSelector )\nthis.errorPanel = $( configuration.errorPanel.errorPanelSelector, this.bodyContainer );\n\nif ( configuration.errorPanel.errorListClientSideSelector )\nthis.errorListClientSide = $( configuration.errorPanel.errorListClientSideSelector, this.bodyContainer );\n\nif ( configuration.errorPanel.errorListServerSideSelector )\nthis.errorListServerSide = $( configuration.errorPanel.errorListServerSideSelector, this.bodyContainer );\n}\nif ( configuration.validationSummarySelector )\nthis.validationSummaryPanel = $( configuration.validationSummarySelector );\n}\n}' },


        ],
        colors: [
            { color: "blue", color1: "#346095", color2: "#e2e8fb", color3: "#bcd9ef", copy1: "Colored Text:", copy2: "Background Blue:", copy3: "Grid Line Blue:", meta: "banners" },
            { color: "green", color1: "#7dc855", color2: "#e7f8de", color3: "", copy1: "Colored Text:", copy2: "Background Green:", copy3: "", meta: "banners" },
            { color: "yellow", color1: "#ec7d1b", color2: "#faf3d6", color3: "", copy1: "Colored Text:", copy2: "Background Yellow:", copy3: "", meta: "banners" },
            { color: "red", color1: "#ca1011", color2: "#fbe2e2", color3: "", copy1: "Colored Text:", copy2: "Background Red:", copy3: "", meta: "banners" },
        ],
        toast: [
            { type: "success", btnText: "success toast", toastText: "Success", click: "successToast()", meta: "banners" },
            { type: "warning", btnText: "warning toast", toastText: "Warning", click: "warningToast()", meta: "banners" },
            { type: "error", btnText: "error toast", toastText: "Error", click: "errorToast()", meta: "banners" },
            { type: "info", btnText: "info toast", toastText: "Information", click: "infoToast()", meta: "banners" },
        ],
        spacer: [
            { type: 'spacer' }
        ]

    }
]