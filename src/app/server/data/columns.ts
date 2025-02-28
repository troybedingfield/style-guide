type columnsData = {
    title: string,
    containerhide: [
        { section: string, meta: string },
    ],
    current: { current: string, meta: string },
    ideal: { ideal: string, meta: string },
    columns: [
        { colNum: string, width: string, gutters: string, meta: string },
    ],
    columnsCurrent: [
        { colNum: string, width: string, gutters: string, meta: string },
    ],
    documentation: [

        { title: string, body: string, meta: string },
    ],
    sections: [
        { gutters: string, class: string, meta: string },
    ],
    twocolumns: [
        { headline: string, body: string, meta: string },
    ],
    threecolumns: [
        { headline: string, body: string, meta: string },
    ],
    fourcolumns: [
        { headline: string, body: string, meta: string },
    ],
    twocolbg: [
        { label1: string, label2: string, label3: string, label4: string, btn1: string, btn2: string, meta: string }
    ],
    twocolbgalt: [
        { label1: string, label2: string, label3: string, label4: string, btn1: string, btn2: string, meta: string }
    ],
    twocolbgdoc: [
        { title: string }
    ],
    spacer: [
        { type: string }
    ],
    code: [
        { name: string, example: string, meta: string },
    ],
    code2: [
        { name: string, example: string, meta: string },
    ],
    exampleCode: [
        { name: string, example: string },
    ],
    exampleCode2: [
        { name: string, example: string },
    ],
    colexample: [
        { title: string, meta: string }
    ],
    meta: string
}

export const columnsData = [
    {
        title: "Columns",
        containerhide: [
            { section: "columns", meta: "columns" },
        ],
        current: { current: "Current:", meta: "buttons current" },
        ideal: { ideal: "Ideal:", meta: "buttons ideal" },
        columns: [
            { colNum: "2 Column", width: "588px", gutters: "24px gutters", meta: "columns" },
            { colNum: "3 Column", width: "384px", gutters: "24px gutters", meta: "columns" },
            { colNum: "4 Column", width: "282px", gutters: "16px gutters", meta: "columns" },
        ],
        columnsCurrent: [
            { colNum: "2 Column", width: "50%", gutters: "12px gutters = 24px between columns", meta: "columns" },
            { colNum: "3 Column", width: "33%", gutters: "12px gutters = 24px between columns", meta: "columns" },
            { colNum: "4 Column", width: "25%", gutters: "12px gutters = 24px between columns", meta: "columns" },
        ],
        documentation: [

            { title: "Bootstrap", body: "We are using the Bootstrap 5 Layout Grid System, documentation can be found here:\n", link: "https://getbootstrap.com/docs/5.0/layout/grid/", meta: "columns" },
            { title: "Grid Breakpoints", body: "col-xs-* < 576px\ncol-sm-* ≥ 576px\ncol-sm-* ≥ 768px\ncol-md-* ≥ 992px\ncol-lg-* ≥ 1200px\ncol-xl-* ≥ 1600px\ncol-xxl-* ≥ 1921px", meta: "columns" },
            { title: "Bootstrap layout Grid system Examples", body: "Best examples of the bootstrap grid system responsive down to mobile is the employee page", path: "Employee > Demographics", meta: "columns" },
            { title: "Columns", body: "Examples on white backgrounds using 2, 3, and 4 column configurations.", meta: "columns" },
            {
                title: "Bootstrap Example", body: 'This example uses the small (col-sm-*) Bootstrap breakpoint\n\
        \n\
        Classes used are:\n\
        col-sm-12 = 100%\n\
        col-sm-6 = 50%\n\
        col-sm-4 = 33.3%\n\
        col-sm-3 = 25%\n\
        col-sm-2 = 16.6%\n\
        \nWhatever the smallest breakpoint that is set will be used throughout the rest of the larger breakpoints.\nThe background color highlights the row', meta: "columns"
            },
            { title: "Bootstrap Example Mobile", body: 'This is what the example will look like on mobile.', meta: "columns" },
            {
                title: "Bootstrap Order Example", body: 'This example uses the order Bootstrap Utility which follows the breakpoints as well so you can set order for items across xs, sm, md, lg, xl, xxl add it to the hyphen between order and the number.\n\
        \nIn this case we have the mobile order set with these classes:\n\
        order-0\n\
        order-1\n\
        order-2\n\
        order-3\n\
        order-4\n\
        order-5\n\
        \nThe small breakpoint and up order is set with these classes:\n\
        order-sm-0\n\
        order-sm-1\n\
        order-sm-2\n\
        order-sm-3\n\
        order-sm-4\n\
        order-sm-5\n\
        \nThe background color highlights the row', meta: "columns"
            },
            { title: "Bootstrap Order Example Mobile", body: 'This is what the example will look like on mobile.', meta: "columns" },

        ],
        sections: [
            { gutters: "24px gutters", class: "gutter24", meta: "columns" },
            { gutters: "16px gutters", class: "gutter16", meta: "columns" },
        ],
        twocolumns: [
            { headline: "Headline 1 (H5 Title)", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 2 (H5 Title)", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },

        ],
        threecolumns: [
            { headline: "Headline 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },

        ],
        fourcolumns: [
            { headline: "Headline 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },
            { headline: "Headline 4", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut vestibulum nisl. Suspendisse potenti. In viverra convallis felis sed molestie. Duis lobortis blandit arcu semper porttitor. Cras vitae urna eu turpis condimentum rutrum quis eget augue. Integer feugiat nisl sed semper feugiat. Nulla orci neque, imperdiet vel sapien in, feugiat semper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer neque risus, pharetra vitae diam in, condimentum lacinia leo. Fusce rhoncus, augue a pretium interdum, ligula orci egestas augue, eu accumsan velit ante non dolor. Proin eget lacus a ante tincidunt mollis. Curabitur in augue semper, tempor quam eu, tincidunt justo.", meta: "columns" },

        ],
        twocolbg: [
            { label1: "User Name", label2: "Security Role", label3: "Name", label4: "User Type", btn1: "Search", btn2: "Clear Filters", meta: "columns" }
        ],
        twocolbgalt: [
            { label1: "User Name", label2: "Security Role", label3: "Name", label4: "User Type", btn1: "Search", btn2: "Clear Filters", meta: "columns" }
        ],
        twocolbgdoc: [
            { title: "2 Column on background example" }
        ],
        spacer: [
            { type: 'spacer' }
        ],
        code: [
            { name: "HTML", example: ' <div class="col-xs-12" style="padding-left:0 !important;padding-right:0 !important;">\n<div class="panel panel-default">\n<div class="panel-heading" style="margin: 0 12px !important;">\n<span class="panel-title">\nWhat type of form do you need to create? (select one)\n</span>\n</div>\n<div class="panel-body">\n<div class="form-group">\n<div class="col-sm-6 col-md-4">\n<div class="tile-container">\n<div class="tile-header">\nDynamic Form\n</div>\n<div class="tile-body">\n<div class="tile-content">\nCreate a fillable online form. Display information including questions. Best used for when you don\'t need responses in a specific PDF format.\n</div>\n<div class="view-sample">\n<a href="javascript:void(0)">\n<i class="icon-view"></i> View Sample\n</a>\n</div>\n</div>\n<div class="tile-button">\n<div class="fancy-radio-btn">\n<input name="selectradiotest" id="selectradiotest1" type="radio"\n/>\n<label for="selectradiotest1" class="btn btn-secondary btn-unselected">\n<span class="btn-text">Select</span>\n<i class="icon icon-check_b"></i>\n</label>\n<!-- <label for="selectradiotest1" class="button" tabindex="0"></label> -->\n</div>\n</div>\n</div>\n</div>\n<div class="col-sm-6 col-md-4">\n<div class="tile-container">\n<div class="tile-header">\nAdd Signature to a PDF\n</div>\n<div class="tile-body">\n<div class="tile-content">\nFor when you need to simply add a signature to 1 or more PDFs. Use this when the PDF doesn\'t change from employee-to-employee like an Employee Handbook.\n</div>\n<div class="view-sample">\n<a href="javascript:void(0)">\n<i class="icon-view"></i> View Sample\n</a>\n</div>\n</div>\n<div class="tile-button">\n<div class="fancy-radio-btn">\n<input name="selectradiotest" id="selectradiotest2" type="radio"\n/>\n<label for="selectradiotest2" class="btn btn-secondary btn-unselected">\n<span class="btn-text">Select</span>\n<i class="icon icon-check_b"></i>\n</label>\n<!-- <label for="selectradiotest1" class="button" tabindex="0"></label> -->\n</div>\n</div>\n</div>\n</div>\n<div class="col-sm-6 col-md-4">\n<div class="tile-container">\n<div class="tile-header">\nPopulate a PDF with information\n</div>\n<div class="tile-body">\n<div class="tile-content">\nUse this option when you want the end result of the Form to looks like a PDF or if you need a PDF to show\n information like an employee\'s name. You can also have the employee fill out fields which will then display on a\n PDF for final signature.\n</div>\n<div class="view-sample">\n<a href="javascript:void(0)">\n<i class="icon-view"></i> View Sample\n</a>\n</div>\n</div>\n<div class="tile-button">\n<div class="fancy-radio-btn">\n<input name="selectradiotest" id="selectradiotest3" type="radio"\n/>\n<label for="selectradiotest3" class="btn btn-secondary btn-unselected">\n<span class="btn-text">Select</span>\n<i class="icon icon-check_b"></i>\n</label>\n<!-- <label for="radiotest1" class="button" tabindex="0"></label> -->\n</div>\n</div>\n</div>\n</div> \n</div>\n</div>\n</div>\n</div>', meta: "checkboxes" },
            {
                name: "CSS", example: '\n/* TILE */\n\
        .tile-container {\n\
          border: solid 1px #bdc6cf;\n\
          border-radius: 3px;\n\
          width: 100%;\n\
          height: auto;\n\
          box-shadow: 4px 3px 7px 1px #c7d2db;\n\
          margin-bottom: 24px;\n\
          position: relative;\n\
        }\n\
        .tile-container .tile-header {\n\
          padding:16px;\n\
          height: auto;\n\
          min-height: 40px;\n\
          border-bottom: solid 1px #bdc6cf;\n\
          font-size: 18px;\n\
          font-weight: 500;\n\
          color: #2b333d;\n\
          position: relative;\n\
          white-space: nowrap;\n\
            overflow: hidden;\n\
            text-overflow: ellipsis;\n\
        }\n\
        .tile-container .tile-body {\n\
          padding:16px;\n\
          position: relative;\n\
        }\n\
        .tile-container .tile-body .tile-content {\n\
          position: relative;\n\
          height: auto;\n\
        }\n\
        .tile-container .view-sample {\n\
          padding:16px 8px;\n\
        }\n\
        .tile-container .tile-button {\n\
          width: 100%;\n\
            position: relative;\n\
            padding: 16px;\n\
            bottom: 0;\n\
        }\n\
        .tile-container .tile-button button {\n\
          width: 100%;\n\
        }\n\
        .btn-unselected .icon {\n\
        display: none;\n\
        font-size: 24px;\n\
        top: 5px;\n\
        position: relative;\n\
        }\n\
        .btn-selected {\n\
          background-color: #7dc855 !important;\n\
            color: #ffffff !important;\n\
            border-color: #7dc855 !important;\n\
        }\n\
        .btn-selected:hover {\n\
          background-color: #7dc855 !important;\n\
            color: #ffffff !important;\n\
            border-color: #7dc855 !important;\n\
        }\n\
        .btn-selected .icon {\n\
        font-size: 24px;\n\
        top: 5px;\n\
        position: relative;\n\
        }\n\
        .btn-selected .btn-text {\n\
        display: none;\n\
        }\n\
        \n\
        \n\
        /* NEW RADIO */\n\
  .fancy-radio-btn {\n\
    display: inline-block;\n\
    width: 100%;\n\
  }\n\
  .fancy-radio-btn input[type="radio"] {\n\
    display: none;\n\
  }\n\
  .fancy-radio-btn label:not(.button),\n\
  .fancy-radio-btn span:not(.button) {\n\
    margin-left: 0px;\n\
    margin-right: 0px;\n\
    position: relative;\n\
    margin-bottom: 0;\n\
    width: 100%;\n\
    max-width: 100%;\n\
  }\n\
  .fancy-radio-btn .button {\n\
    -webkit-appearance: none;\n\
    background-color: #fff;\n\
    border: 1px solid #bdc6cf;\n\
    padding: 0;\n\
    border-radius: 50px;\n\
    display: inline-block;\n\
    position: relative;\n\
    width: 16px;\n\
    height: 16px;\n\
    margin-top: 2px;\n\
    float: left;\n\
  }\n\
  .fancy-radio-btn .btn:active {\n\
    background-color: #7dc855 !important;\n\
    color: #ffffff;\n\
  }\n\
  .fancy-radio-btn .btn .icon {\n\
    display: none;\n\
  }\n\
  .fancy-radio-btn .btn .btn-text {\n\
    margin: 0;\n\
  }\n\
  .fancy-radio-btn input[type="radio"]:checked ~ .btn {\n\
    background-color: #7dc855;\n\
    border: 1px solid #7dc855;\n\
    color: #fff;\n\
  }\n\
  .fancy-radio-btn input[type="radio"]:checked ~ .btn .btn-text {\n\
    display: none;\n\
  }\n\
  .fancy-radio-btn input[type="radio"]:checked ~ .btn .icon {\n\
    display: inline-block;\n\
    font-size: 24px;\n\
    top: 5px;\n\
      position: relative;\n\
  }\n\
  .fancy-radio-btn input[type="radio"][disabled]:checked ~ .btn {\n\
    border: solid 1px #c7d2db;\n\
    background-color: #f3f6f8;\n\
    color: #c7d2db;\n\
  }\n\
  .fancy-radio-btn input[type="radio"][disabled]:checked ~ .btn:after {\n\
    background: #c7d2db;\n\
  }\n\
        ', meta: "checkboxes"
            },


        ],
        code2: [
            {
                name: "HTML", example: '<div class="col-xs-12" style="padding-left:0 !important;padding-right:0 !important;">\n\
        <div class="panel panel-default">\n\
          <div class="panel-heading" style="margin: 0 12px !important;">\n\
            <span class="panel-title">\n\
              What type of form do you need to create? (select multiple)\n\
          </span>\n\
          </div>\n\
          <div class="panel-body">\n\
            <div class="form-group">\n\
            <div class="col-sm-6 col-md-4">\n\
          <div class="tile-container">\n\
            <div class="tile-header">\n\
              Dynamic Form\n\
            </div>\n\
            <div class="tile-body">\n\
              <div class="tile-content">\n\
                Create a fillable online form. Display information including questions. Best used for when you don\'t need responses in a specific PDF format.\n\
              </div>\n\
              <div class="view-sample">\n\
                <a href="javascript:void(0)">\n\
                  <i class="icon-view"></i> View Sample\n\
                </a>\n\
              </div>\n\
              \n\
            </div>\n\
            <div class="tile-button">\n\
              <div class="fancy-checkbox-btn">\n\
                <input name="selectcheckboxtest" id="selectcheckboxtest1" type="checkbox"\n\
                   />\n\
                <label for="selectcheckboxtest1" class="btn btn-secondary btn-unselected">\n\
                  <span class="btn-text">Select</span>\n\
              <i class="icon icon-check_b"></i>\n\
                </label>\n\
                <!-- <label for="selectcheckboxtest1" class="button" tabindex="0"></label> -->\n\
              </div>\n\
              \n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="col-sm-6 col-md-4">\n\
          <div class="tile-container">\n\
            <div class="tile-header">\n\
              Add Signature to a PDF\n\
            </div>\n\
            <div class="tile-body">\n\
              <div class="tile-content">\n\
               For when you need to simply add a signature to 1 or more PDFs. Use this when the PDF doesn\'t change from employee-to-employee like an Employee Handbook.\n\
              </div>\n\
              <div class="view-sample">\n\
                <a href="javascript:void(0)">\n\
                  <i class="icon-view"></i> View Sample\n\
                </a>\n\
              </div>\n\
              \n\
            </div>\n\
            <div class="tile-button">\n\
              <div class="fancy-checkbox-btn">\n\
                <input name="selectcheckboxtest" id="selectcheckboxtest2" type="checkbox"\n\
                   />\n\
                <label for="selectcheckboxtest2" class="btn btn-secondary btn-unselected">\n\
                  <span class="btn-text">Select</span>\n\
              <i class="icon icon-check_b"></i>\n\
                </label>\n\
                <!-- <label for="selectcheckboxtest1" class="button" tabindex="0"></label> -->\n\
              </div>\n\
              \n\
            </div>\n\
          </div>\n\
        </div> \n\
        <div class="col-sm-6 col-md-4">\n\
          <div class="tile-container">\n\
            <div class="tile-header">\n\
              Populate a PDF with information\n\
            </div>\n\
            <div class="tile-body">\n\
              <div class="tile-content">\n\
                Use this option when you want the end result of the Form to looks like a PDF or if you need a PDF to show information like an employee\'s name. You can also have the employee fill out fields which will then display on a PDF for final signature.\n\
              </div>\n\
              <div class="view-sample">\n\
                <a href="javascript:void(0)">\n\
                  <i class="icon-view"></i> View Sample\n\
                </a>\n\
              </div>\n\
              \n\
            </div>\n\
            <div class="tile-button">\n\
              <div class="fancy-checkbox-btn">\n\
                <input name="selectcheckboxtest" id="selectcheckboxtest3" type="checkbox"\n\
                   />\n\
                <label for="selectcheckboxtest3" class="btn btn-secondary btn-unselected">\n\
                  <span class="btn-text">Select</span>\n\
              <i class="icon icon-check_b"></i>\n\
                </label>\n\
                <!-- <label for="checkboxtest1" class="button" tabindex="0"></label> -->\n\
              </div>\n\
              \n\
            </div>\n\
          </div>\n\
        </div> \n\
        \n\
        \n\
          </div>\n\
        </div>\n\
      </div>\n\
      </div>', meta: "checkboxes"
            },
            {
                name: "CSS", example: '\n/* TILE */\n\
        .tile-container {\n\
          border: solid 1px #bdc6cf;\n\
          border-radius: 3px;\n\
          width: 100%;\n\
          height: auto;\n\
          box-shadow: 4px 3px 7px 1px #c7d2db;\n\
          margin-bottom: 24px;\n\
          position: relative;\n\
        }\n\
        .tile-container .tile-header {\n\
          padding:16px;\n\
          height: auto;\n\
          min-height: 40px;\n\
          border-bottom: solid 1px #bdc6cf;\n\
          font-size: 18px;\n\
          font-weight: 500;\n\
          color: #2b333d;\n\
          position: relative;\n\
          white-space: nowrap;\n\
            overflow: hidden;\n\
            text-overflow: ellipsis;\n\
        }\n\
        .tile-container .tile-body {\n\
          padding:16px;\n\
          position: relative;\n\
        }\n\
        .tile-container .tile-body .tile-content {\n\
          position: relative;\n\
          height: auto;\n\
        }\n\
        .tile-container .view-sample {\n\
          padding:16px 8px;\n\
        }\n\
        .tile-container .tile-button {\n\
          width: 100%;\n\
            position: relative;\n\
            padding: 16px;\n\
            bottom: 0;\n\
        }\n\
        .tile-container .tile-button button {\n\
          width: 100%;\n\
        }\n\
        .btn-unselected .icon {\n\
        display: none;\n\
        font-size: 24px;\n\
        top: 5px;\n\
        position: relative;\n\
        }\n\
        .btn-selected {\n\
          background-color: #7dc855 !important;\n\
            color: #ffffff !important;\n\
            border-color: #7dc855 !important;\n\
        }\n\
        .btn-selected:hover {\n\
          background-color: #7dc855 !important;\n\
            color: #ffffff !important;\n\
            border-color: #7dc855 !important;\n\
        }\n\
        .btn-selected .icon {\n\
        font-size: 24px;\n\
        top: 5px;\n\
        position: relative;\n\
        }\n\
        .btn-selected .btn-text {\n\
        display: none;\n\
        }\n\
        \n\
        \n\
        /* NEW CHECKBOX */\n\
  .fancy-checkbox-btn input[type="checkbox"] {\n\
    display: none;\n\
  }\n\
  \n\
  .fancy-checkbox-btn label:not(.button),\n\
  .fancy-checkbox-btn span:not(.button) {\n\
    \n\
    width: 100%;\n\
    max-width: 100%;\n\
  }\n\
  \n\
  .fancy-checkbox-btn .button {\n\
    -webkit-appearance: none;\n\
    background-color: #fff;\n\
    border: 1px solid #bdc6cf;\n\
    padding: 0;\n\
    border-radius: 50px;\n\
    display: inline-block;\n\
    position: relative;\n\
    width: 16px;\n\
    height: 16px;\n\
    margin-top: 2px;\n\
    float: left;\n\
  }\n\
  .fancy-checkbox-btn .btn:active {\n\
    background-color: #7dc855 !important;\n\
    color: #ffffff;\n\
  }\n\
  \n\
  .fancy-checkbox-btn .btn .icon {\n\
    display: none;\n\
  }\n\
  .fancy-checkbox-btn .btn .btn-text {\n\
    margin: 0;\n\
  }\n\
  \n\
  .fancy-checkbox-btn input[type="checkbox"]:checked ~ .btn {\n\
    background-color: #7dc855;\n\
    border: 1px solid #7dc855;\n\
    color: #fff;\n\
  }\n\
  .fancy-checkbox-btn input[type="checkbox"]:checked ~ .btn .btn-text {\n\
    display: none;\n\
  }\n\
  .fancy-checkbox-btn input[type="checkbox"]:checked ~ .btn .icon {\n\
    display: inline-block;\n\
    font-size: 24px;\n\
    top: 5px;\n\
      position: relative;\n\
  }\n\
  \n\
  \n\
  .fancy-checkbox-btn input[type="checkbox"][disabled]:checked ~ .btn {\n\
    border: solid 1px #c7d2db;\n\
    background-color: #f3f6f8;\n\
    color: #c7d2db;\n\
  }\n\
  \n\
  .fancy-checkbox-btn input[type="checkbox"][disabled]:checked ~ .btn:after {\n\
    background: #c7d2db;\n\
  }\n\
        ', meta: "checkboxes"
            },


        ],
        exampleCode: [
            {
                name: "Example", example: '\n<div id="bs-grid-example" class="row ">\n\
        \n\
        <!-- 1 column -->\n\
          <div class="row p-0 light-blue bg">\n\
            <div class="col-sm-12">\n\
              <div class="column-example">100%</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 2 column -->\n\
          <div class="row p-0 light-yellow bg">\n\
            <div class="col-sm-6">\n\
              <div class="column-example">50%</div>\n\
            </div>\n\
            <div class="col-sm-6">\n\
              <div class="column-example ">50%</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 3 column -->\n\
          <div class="row p-0 light-orange bg">\n\
            <div class="col-sm-4">\n\
              <div class="column-example">33.3%</div>\n\
            </div>\n\
            <div class="col-sm-4">\n\
              <div class="column-example ">33.3%</div>\n\
            </div>\n\
            <div class="col-sm-4">\n\
              <div class="column-example ">33.3%</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 4 column -->\n\
          <div class="row p-0 light-red bg">\n\
            <div class="col-sm-3">\n\
              <div class="column-example">25%</div>\n\
            </div>\n\
            <div class="col-sm-3">\n\
              <div class="column-example ">25%</div>\n\
            </div>\n\
            <div class="col-sm-3">\n\
              <div class="column-example ">25%</div>\n\
            </div>\n\
            <div class="col-sm-3">\n\
              <div class="column-example ">25%</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 6 column -->\n\
          <div class="row p-0 light-green bg">\n\
            <div class="col-sm-2">\n\
              <div class="column-example">16.6%</div>\n\
            </div>\n\
            <div class="col-sm-2">\n\
              <div class="column-example ">16.6%</div>\n\
            </div>\n\
            <div class="col-sm-2">\n\
              <div class="column-example ">16.6%</div>\n\
            </div>\n\
            <div class="col-sm-2">\n\
              <div class="column-example ">16.6%</div>\n\
            </div>\n\
            <div class="col-sm-2">\n\
              <div class="column-example ">16.6%</div>\n\
            </div>\n\
            <div class="col-sm-2">\n\
              <div class="column-example ">16.6%</div>\n\
            </div>\n\
          </div>\n\
          \n\
        </div> '},
        ],
        exampleCode2: [
            {
                name: "Example", example: '\n<div id="bs-grid-example" class="row ">\n\
        \n\
        <!-- 1 column -->\n\
          <div class="row p-0 light-blue bg">\n\
            <div class="col-sm-12">\n\
              <div class="column-example">1</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 2 column -->\n\
          <div class="row p-0 light-yellow bg">\n\
            <div class="col-sm-6 order-1 order-sm-0">\n\
              <div class="column-example">1</div>\n\
            </div>\n\
            <div class="col-sm-6 order-0 order-sm-1">\n\
              <div class="column-example ">2</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 3 column -->\n\
          <div class="row p-0 light-orange bg">\n\
            <div class="col-sm-4 order-0 order-sm-0">\n\
              <div class="column-example">1</div>\n\
            </div>\n\
            <div class="col-sm-4 order-2 order-sm-1">\n\
              <div class="column-example ">2</div>\n\
            </div>\n\
            <div class="col-sm-4 order-1 order-sm-2">\n\
              <div class="column-example ">3</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 4 column -->\n\
          <div class="row p-0 light-red bg">\n\
            <div class="col-sm-3 order-1 order-sm-0">\n\
              <div class="column-example">1</div>\n\
            </div>\n\
            <div class="col-sm-3 order-0 order-sm-1">\n\
              <div class="column-example ">2</div>\n\
            </div>\n\
            <div class="col-sm-3 order-3 order-sm-2">\n\
              <div class="column-example ">3</div>\n\
            </div>\n\
            <div class="col-sm-3 order-2 order-sm-3">\n\
              <div class="column-example ">4</div>\n\
            </div>\n\
          </div>\n\
          \n\
        <!-- 6 column -->\n\
          <div class="row p-0 light-green bg">\n\
            <div class="col-sm-2 order-5 order-sm-0">\n\
              <div class="column-example">1</div>\n\
            </div>\n\
            <div class="col-sm-2 order-4 order-sm-1">\n\
              <div class="column-example ">2</div>\n\
            </div>\n\
            <div class="col-sm-2 order-2 order-sm-2">\n\
              <div class="column-example ">3</div>\n\
            </div>\n\
            <div class="col-sm-2 order-3 order-sm-3">\n\
              <div class="column-example ">4</div>\n\
            </div>\n\
            <div class="col-sm-2 order-1 order-sm-4">\n\
              <div class="column-example ">5</div>\n\
            </div>\n\
            <div class="col-sm-2 order-0 order-sm-5">\n\
              <div class="column-example ">6</div>\n\
            </div>\n\
          </div>\n\
          \n\
      </div>'},
        ],
        colexample: [
            { title: "columns", meta: "columns" }
        ],
        meta: "columns"
    },

]