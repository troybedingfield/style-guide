import { Fragment } from "react";
import { columnsData } from "../server/data/columns";
import './styles/columns.scss'

export default function Columns({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const columnsD = columnsData;
    const columnsFilter = columnsD.filter(column => [query].every(e => column.meta.includes(e)))
    return (
        <div id="columns">




            {columnsFilter.map((title, index) => {
                return (
                    <Fragment key={index}>
                        <div id="section-head" className="py-4">
                            <h3>{title.title}</h3>
                            <hr />
                        </div>
                    </Fragment>
                );
            })}


            <div id="innerContainer">

                <div id="sectionContainer">

                    <div id="documentation">
                        {columnsFilter.map(docs => {
                            return (
                                docs.documentation.map((doc, index) => {
                                    return (
                                        <Fragment key={index}>
                                            {doc.title === "Bootstrap" &&
                                                <>
                                                    <h6>{doc.title}</h6>
                                                    <p >{doc.body}</p>
                                                    <a href="{{doc.link}}" target="_blank">{doc.link}</a>
                                                </>
                                            }
                                            {doc.title === "Grid Breakpoints" &&
                                                <>
                                                    <h6>{doc.title}</h6>
                                                    <p >{doc.body}</p>
                                                </>
                                            }
                                            {doc.title === "Columns" &&
                                                <>
                                                    <p >{doc.body}</p>
                                                </>
                                            }
                                        </Fragment>
                                    )
                                }));
                        })}





                    </div>
                    <div id="column" className="main-content">





                        {columnsFilter.map(cols => {
                            return cols.columns.map((col, index) => {
                                return (
                                    <Fragment key={index}>
                                        {col.colNum === "2 Column" &&
                                            <div className="py-4">
                                                <Fragment>
                                                    <div className="mb-20">
                                                        <span className="box light-green bg"></span>&nbsp; =

                                                        <small><strong>12px gutters</strong></small>
                                                    </div>
                                                    <div className="gutterColumn">
                                                        <p >{col.colNum}</p>
                                                        <small><strong
                                                        ></strong>{col.gutters}</small>
                                                    </div>
                                                    <div className="two-col-current">
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-1 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-2 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            </div>
                                        }
                                        {col.colNum === "3 Column" &&
                                            <div className="py-4">
                                                <Fragment key={index}>
                                                    <div className="gutterColumn">
                                                        <p >{col.colNum}</p>
                                                        <small><strong
                                                        ></strong>{col.gutters}</small>
                                                    </div>
                                                    <div className="three-col-current">
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-1 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-2 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-3 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            </div>
                                        }
                                        {col.colNum === "4 Column" &&
                                            <div className="py-4">
                                                <Fragment key={index}>
                                                    <div className="gutterColumn">
                                                        <p >{col.colNum}</p>
                                                        <small><strong
                                                        ></strong>{col.gutters}</small>
                                                    </div>
                                                    <div className="four-col-current">
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-1 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-2 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-3 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                        <div className="column-4 border">
                                                            <p className="text-center" >{col.width}</p>
                                                        </div>
                                                        <div className="gut-default light-green bg">
                                                            <p>&nbsp;</p>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            </div>
                                        }
                                    </Fragment>
                                )
                            });
                        })}


















                    </div>
                </div>

            </div>










            <div id="sectionContainer">
                <div id="documentation">

                </div>

                <div id="column" className="main-content">

                    <div className="container grid grid-cols-12">
                        {columnsFilter.map(cols => {
                            return cols.twocolumns.map((col, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="flex col-span-6 py-4">
                                            <div className="gut-default light-green bg">
                                                <p>&nbsp;</p>
                                            </div>
                                            <div className="column-2-current">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h5 className="panel-title">
                                                            {col.headline}
                                                        </h5>
                                                    </div>
                                                    <div className="panel-body">
                                                        {col.body}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gut-default light-green bg">
                                                <p>&nbsp;</p>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            });
                        })}
                    </div>






                </div>






            </div>




            <div id="sectionContainer">
                <div id="documentation">

                </div>

                <div id="column" className="main-content">
                    <div className="container grid grid-cols-12">
                        {columnsFilter.map(cols => {
                            return cols.threecolumns.map((col, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="flex col-span-4 py-4">
                                            <div className="gut-default light-green bg">
                                                <p>&nbsp;</p>
                                            </div>
                                            <div className="column-3-current">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h5 className="panel-title">
                                                            {col.headline}
                                                        </h5>
                                                    </div>
                                                    <div className="panel-body">
                                                        {col.body}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gut-default light-green bg">
                                                <p>&nbsp;</p>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            });
                        })}
                    </div>


                </div>







            </div>






            <div id="sectionContainer">
                <div id="documentation">

                    {columnsFilter.map(cols => {
                        return cols.documentation.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "Bootstrap Example" &&
                                        <>
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </>
                                    }
                                </Fragment>
                            )
                        });
                    })}

                </div>

                <div id="column" className="main-content">

                    {columnsFilter.map(cols => {
                        return cols.colexample.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "columns" &&
                                        <Fragment >
                                            <div className="py-4">
                                                <h6>Desktop</h6>

                                                <div id="bs-grid-example" className="container grid grid-cols-12">



                                                    <div className="col-span-12 light-blue bg">
                                                        <div className="column-example">100%</div>
                                                    </div>




                                                    <div className="col-span-6 light-yellow bg">
                                                        <div className="column-example">50%</div>
                                                    </div>
                                                    <div className="col-span-6 light-yellow bg">
                                                        <div className="column-example ">50%</div>
                                                    </div>




                                                    <div className="col-span-4 light-orange bg">
                                                        <div className="column-example">33.3%</div>
                                                    </div>
                                                    <div className="col-span-4 light-orange bg">
                                                        <div className="column-example ">33.3%</div>
                                                    </div>
                                                    <div className="col-span-4 light-orange bg">
                                                        <div className="column-example ">33.3%</div>
                                                    </div>




                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example">25%</div>
                                                    </div>
                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example ">25%</div>
                                                    </div>
                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example ">25%</div>
                                                    </div>
                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example ">25%</div>
                                                    </div>




                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example">16.6%</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">16.6%</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">16.6%</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">16.6%</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">16.6%</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">16.6%</div>
                                                    </div>


                                                </div>
                                            </div>
                                        </Fragment>
                                    }
                                </Fragment>
                            )
                        });
                    })}





                </div>







            </div>




            <div id="sectionContainer">
                <div id="documentation">

                    {columnsFilter.map(cols => {
                        return cols.documentation.map(col => {
                            return (
                                <>
                                    {col.title === "Bootstrap Example Mobile" &&
                                        <>
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </>
                                    }
                                </>
                            )
                        });
                    })}



                </div>

                <div id="column" className="main-content">

                    {columnsFilter.map(cols => {
                        return cols.colexample.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "columns" &&
                                        <Fragment >
                                            <div className="py-4">
                                                <h6>Mobile</h6>

                                                <div id="mobile-view" className="row p-0">

                                                    <div className="row p-0 light-blue bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">100%</div>
                                                        </div>
                                                    </div>

                                                    <div className="row p-0 light-yellow bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">50%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">50%</div>
                                                        </div>
                                                    </div>


                                                    <div className="row p-0 light-orange bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">33.3%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">33.3%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">33.3%</div>
                                                        </div>
                                                    </div>


                                                    <div className="row p-0 light-red bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">25%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">25%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">25%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">25%</div>
                                                        </div>
                                                    </div>


                                                    <div className="row p-0 light-green bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">16.6%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">16.6%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">16.6%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">16.6%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">16.6%</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">16.6%</div>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </Fragment>
                                    }
                                </Fragment>
                            )
                        });
                    })}







                </div>







            </div>






            {/* <div id="sectionContainer">
                <div id="documentation">

                </div>
                <div id="column" className="main-content">






                    <h5>CODE:</h5>








                </div>
            </div> */}








            <div id="sectionContainer">
                <div id="documentation">


                    {columnsFilter.map(cols => {
                        return cols.documentation.map(col => {
                            return (
                                <>
                                    {col.title === "Bootstrap Order Example" &&
                                        <>
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </>
                                    }
                                </>
                            )
                        });
                    })}

                </div>

                <div id="column" className="main-content">

                    {columnsFilter.map(cols => {
                        return cols.colexample.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "columns" &&
                                        <Fragment >
                                            <div className="py-4">
                                                <h6>Desktop</h6>

                                                <div id="bs-grid-example" className="container grid grid-cols-12">



                                                    <div className="col-span-12 light-blue bg">
                                                        <div className="column-example">1</div>
                                                    </div>




                                                    <div className="col-span-6 light-yellow bg">
                                                        <div className="column-example">1</div>
                                                    </div>
                                                    <div className="col-span-6 light-yellow bg ">
                                                        <div className="column-example ">2</div>
                                                    </div>




                                                    <div className="col-span-4 light-orange bg">
                                                        <div className="column-example">1</div>
                                                    </div>
                                                    <div className="col-span-4 light-orange bg">
                                                        <div className="column-example ">2</div>
                                                    </div>
                                                    <div className="col-span-4 light-orange bg">
                                                        <div className="column-example ">3</div>
                                                    </div>




                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example">1</div>
                                                    </div>
                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example ">2</div>
                                                    </div>
                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example ">3</div>
                                                    </div>
                                                    <div className="col-span-3 light-red bg">
                                                        <div className="column-example ">4</div>
                                                    </div>




                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example">1</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">2</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">3</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">4</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">5</div>
                                                    </div>
                                                    <div className="col-span-2 light-green bg">
                                                        <div className="column-example ">6</div>
                                                    </div>


                                                </div>
                                            </div>
                                        </Fragment>
                                    }
                                </Fragment>
                            )
                        });
                    })}







                </div>







            </div>












            <div id="sectionContainer">
                <div id="documentation">


                    {columnsFilter.map(cols => {
                        return cols.documentation.map(col => {
                            return (
                                <>
                                    {col.title === "Bootstrap Order Example Mobile" &&
                                        <>
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </>
                                    }
                                </>
                            )
                        });
                    })}

                </div>

                <div id="column" className="main-content">

                    {columnsFilter.map(cols => {
                        return cols.colexample.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "columns" &&
                                        <Fragment >
                                            <div className="py-4">
                                                <h6>Mobile</h6>
                                                <div id="mobile-view" className="row ">

                                                    <div className="row p-0 light-blue bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">1</div>
                                                        </div>
                                                    </div>

                                                    <div className="row p-0 light-yellow bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">2</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">1</div>
                                                        </div>
                                                    </div>


                                                    <div className="row p-0 light-orange bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">1</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">3</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">2</div>
                                                        </div>
                                                    </div>


                                                    <div className="row p-0 light-red bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">2</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">1</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">4</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">3</div>
                                                        </div>
                                                    </div>


                                                    <div className="row p-0 light-green bg">
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example">6</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">5</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">3</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">4</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">2</div>
                                                        </div>
                                                        <div className="col-sm-12 p-0 m-0">
                                                            <div className="column-example ">1</div>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </Fragment>
                                    }
                                </Fragment>
                            )
                        });
                    })}
                </div>
            </div>









            {/* <div id="sectionContainer">
                <div id="documentation">


                </div>
                <div id="column" className="main-content">






                    <h5>CODE:</h5>









                </div>
            </div> */}








            {/* <div id="sectionContainer">
                <div id="documentation">

                    <h6></h6>


                    <div id="column" className="main-content">


                        <h5 ></h5>





                        <div className="searchFiltersContainer">
                            <form className="ng-untouched ng-pristine ng-valid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group"><span id="UserName_LABEL" className="control-label"></span><input
                                            className="form-control ng-untouched ng-pristine ng-valid" id="userName"
                                            type="text" /></div>
                                        <div className="form-group"><span id="Name_LABEL" className="control-label"></span><input
                                            className="form-control ng-untouched ng-pristine ng-valid" id="FulName"
                                            name="fullName" type="text" /></div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group"><span className="control-label" id="Role_LABEL"></span><select
                                            className="form-control ng-untouched ng-pristine ng-valid"
                                            look-up-code-drop-down-list="SecurityRoleCode" >
                                            <option value=""></option>
                                            <option value="Admin">Admin - Administrators</option>
                                            <option value="Admin-1">Admin-1 - test from millennium</option>
                                            <option value="API - Daily Pay User">API - Daily Pay User - API - Daily Pay User</option>
                                            <option value="API - DailyPay">API - DailyPay - Only DailyPay access</option>
                                            <option value="ApiRole">ApiRole - Role for API Users</option>
                                            <option value="ApiTestRole">ApiTestRole - Test role for API unit tests</option>
                                            <option value="Atlanta ZOO">Atlanta ZOO - Atlanta ZOO</option>
                                            <option value="ATSAPIRole">ATSAPIRole - ATS API Role</option>
                                            <option value="ATSOnboardingRole">ATSOnboardingRole - ATSOnboardingRole</option>
                                            <option value="Company">Company - Company</option>
                                            <option value="Company-ESSAdm">Company-ESSAdm - Company</option>
                                            <option value="DataMgmt">DataMgmt - Client Admin- NOT including the System menu</option>
                                            <option value="EHireBlocked">EHireBlocked - Company &gt; E-Hire/E-Verify section ia blocked
                                            </option>
                                            <option value="FULLACCESS">FULLACCESS - Provides access to everything, but not called Admin
                                            </option>
                                            <option value="HR Only">HR Only - Employee section should be blocked</option>
                                            <option value="impersonate">impersonate - ability to impersonate users</option>
                                            <option value="New Role #1">New Role #1 - test from Millennium</option>
                                            <option value="Onboarding">Onboarding - WP-1420</option>
                                            <option value="Payroll Only">Payroll Only - for France Role has access only to Payroll section
                                            </option>
                                            <option value="Payroll Only-ESSAdm">Payroll Only-ESSAdm - Role has access only to Payroll section
                                            </option>
                                            <option value="Payrolluser">Payrolluser - payroll user</option>
                                            <option value="Payrolluser-ESSAdm">Payrolluser-ESSAdm - payroll user</option>
                                            <option value="ReportingRole">ReportingRole - Access to reports only</option>
                                            <option value="RPO USER STANDARD Read Only-ESSOnb">RPO USER STANDARD Read Only-ESSOnb - Standard
                                                User Access with Onboarding Read Only</option>
                                            <option value="SecurityTestRole">SecurityTestRole - Role for testing different security rules
                                            </option>
                                            <option value="SecurityTestRole-ESSAdm">SecurityTestRole-ESSAdm - Role for testing different
                                                security rules</option>
                                            <option value="Srole">Srole - testing corsponding databse </option>
                                            <option value="Super">Super - Super 1</option>
                                            <option value="Test">Test - deny (Role level) vs allows (User level) rules</option>
                                            <option value="VladTestRole">VladTestRole - Security role for testing functionality of security
                                                screens.</option>
                                        </select></div>
                                        <div className="form-group"><span className="control-label" id="Type_LABEL"></span><select
                                            className="form-control ng-untouched ng-pristine ng-valid" id="userType"
                                            look-up-code-drop-down-list="UserType" look-up-display-blank-item-text="false"
                                            look-up-display-value="true" >
                                            <option value=""></option>
                                            <option value="Admin">Admin - Administrator - NO RULES APPLY!</option>
                                            <option value="Local Admin">Local Admin - Local Administrator</option>
                                            <option value="CSR">CSR - Customer Service Representitive</option>
                                            <option value="Controller">Controller - Service Bureau Money Management</option>
                                            <option value="Tax Dept">Tax Dept - Service Bureau Tax Department</option>
                                            <option value="Company">Company - Company User</option>
                                            <option value="Conversions">Conversions - Service Bureau Conversions and Implementation</option>
                                            <option value="Data Entry">Data Entry - Service Bureau Data Entry Staff</option>
                                            <option value="Packout">Packout - Service Bureau Packout Staff</option>
                                            <option value="Operator">Operator - Service Bureau Operations</option>
                                            <option value="MIS">MIS - Service Bureau MIS</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 ">
                                        <div className="form-group">
                                            <div className="button-label-spacer"></div>
                                            <button className="btn btn-primary" id="SearchButton" type="button" ><i
                                                className="fa fa-search "></i> </button>
                                            <button className="btn btn-secondary" id="ClearSettingsButton" type="button" ><i
                                                className="fa fa-eraser "></i>  </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="clearfix"></div>
                        </div>







                        <h5 ></h5>






                        <div className="searchFiltersContainer">
                            <form className="ng-untouched ng-pristine ng-valid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <span id="UserName_LABEL" className="control-label"></span>
                                            <input className="form-control ng-untouched ng-pristine ng-valid" id="userName"
                                                type="text" />
                                        </div>
                                        <div className="form-group">
                                            <span id="Name_LABEL" className="control-label"></span>
                                            <input className="form-control ng-untouched ng-pristine ng-valid" id="FulName"
                                                name="fullName" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <span className="control-label" id="Role_LABEL"></span>
                                            <select className="form-control ng-untouched ng-pristine ng-valid"
                                                look-up-code-drop-down-list="SecurityRoleCode" >
                                                <option value=""></option>
                                                <option value="Admin">Admin - Administrators</option>
                                                <option value="Admin-1">Admin-1 - test from millennium</option>
                                                <option value="API - Daily Pay User">API - Daily Pay User - API - Daily Pay User</option>
                                                <option value="API - DailyPay">API - DailyPay - Only DailyPay access</option>
                                                <option value="ApiRole">ApiRole - Role for API Users</option>
                                                <option value="ApiTestRole">ApiTestRole - Test role for API unit tests</option>
                                                <option value="Atlanta ZOO">Atlanta ZOO - Atlanta ZOO</option>
                                                <option value="ATSAPIRole">ATSAPIRole - ATS API Role</option>
                                                <option value="ATSOnboardingRole">ATSOnboardingRole - ATSOnboardingRole</option>
                                                <option value="Company">Company - Company</option>
                                                <option value="Company-ESSAdm">Company-ESSAdm - Company</option>
                                                <option value="DataMgmt">DataMgmt - Client Admin- NOT including the System menu</option>
                                                <option value="EHireBlocked">EHireBlocked - Company &gt; E-Hire/E-Verify section ia blocked
                                                </option>
                                                <option value="FULLACCESS">FULLACCESS - Provides access to everything, but not called Admin
                                                </option>
                                                <option value="HR Only">HR Only - Employee section should be blocked</option>
                                                <option value="impersonate">impersonate - ability to impersonate users</option>
                                                <option value="New Role #1">New Role #1 - test from Millennium</option>
                                                <option value="Onboarding">Onboarding - WP-1420</option>
                                                <option value="Payroll Only">Payroll Only - for France Role has access only to Payroll section
                                                </option>
                                                <option value="Payroll Only-ESSAdm">Payroll Only-ESSAdm - Role has access only to Payroll section
                                                </option>
                                                <option value="Payrolluser">Payrolluser - payroll user</option>
                                                <option value="Payrolluser-ESSAdm">Payrolluser-ESSAdm - payroll user</option>
                                                <option value="ReportingRole">ReportingRole - Access to reports only</option>
                                                <option value="RPO USER STANDARD Read Only-ESSOnb">RPO USER STANDARD Read Only-ESSOnb - Standard
                                                    User Access with Onboarding Read Only</option>
                                                <option value="SecurityTestRole">SecurityTestRole - Role for testing different security rules
                                                </option>
                                                <option value="SecurityTestRole-ESSAdm">SecurityTestRole-ESSAdm - Role for testing different
                                                    security rules</option>
                                                <option value="Srole">Srole - testing corsponding databse </option>
                                                <option value="Super">Super - Super 1</option>
                                                <option value="Test">Test - deny (Role level) vs allows (User level) rules</option>
                                                <option value="VladTestRole">VladTestRole - Security role for testing functionality of security
                                                    screens.</option>
                                            </select>
                                        </div>
                                        <div className="form-group"><span className="control-label" id="Type_LABEL"></span><select
                                            className="form-control ng-untouched ng-pristine ng-valid" id="userType"
                                            look-up-code-drop-down-list="UserType" look-up-display-blank-item-text="false"
                                            look-up-display-value="true" >
                                            <option value=""></option>
                                            <option value="Admin">Admin - Administrator - NO RULES APPLY!</option>
                                            <option value="Local Admin">Local Admin - Local Administrator</option>
                                            <option value="CSR">CSR - Customer Service Representitive</option>
                                            <option value="Controller">Controller - Service Bureau Money Management</option>
                                            <option value="Tax Dept">Tax Dept - Service Bureau Tax Department</option>
                                            <option value="Company">Company - Company User</option>
                                            <option value="Conversions">Conversions - Service Bureau Conversions and Implementation</option>
                                            <option value="Data Entry">Data Entry - Service Bureau Data Entry Staff</option>
                                            <option value="Packout">Packout - Service Bureau Packout Staff</option>
                                            <option value="Operator">Operator - Service Bureau Operations</option>
                                            <option value="MIS">MIS - Service Bureau MIS</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 ">
                                        <div className="form-group">
                                            <div className="button-label-spacer"></div>
                                            <div id="updates" className="btnAlt">
                                                <button className="btn btn-primary" id="SearchButton" type="button" ><i
                                                    className="fa fa-search "></i> </button>
                                                <button className="btn btn-secondary" id="ClearSettingsButton" type="button" ><i
                                                    className="fa fa-eraser "></i>  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="clearfix"></div>
                        </div>




                    </div>






                </div>







            </div> */}


        </div>
    )
}