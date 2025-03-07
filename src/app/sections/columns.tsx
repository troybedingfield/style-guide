import { Fragment } from "react";
import { columnsData } from "../server/data/columns";
import './styles/columns.scss'

export default function Columns(
    {
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number;
    }
) {
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
                                                <div className="py-4">
                                                    <h6>{doc.title}</h6>
                                                    <p >{doc.body}</p>
                                                    <a href="{{doc.link}}" target="_blank">{doc.link}</a>
                                                </div>
                                            }
                                            {doc.title === "Grid Breakpoints" &&
                                                <div className="py-4">
                                                    <h6>{doc.title}</h6>
                                                    <p >{doc.body}</p>
                                                </div>
                                            }
                                            {doc.title === "Columns" &&
                                                <div className="py-4">
                                                    <p >{doc.body}</p>
                                                </div>
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
                                        <div className="py-4">
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </div>
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
                        return cols.documentation.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "Bootstrap Example Mobile" &&
                                        <div className="py-4">
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </div>
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
                        return cols.documentation.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "Bootstrap Order Example" &&
                                        <div className="py-4">
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </div>
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
                        return cols.documentation.map((col, index) => {
                            return (
                                <Fragment key={index}>
                                    {col.title === "Bootstrap Order Example Mobile" &&
                                        <div className="py-4">
                                            <h6>{col.title}</h6>
                                            <p>{col.body}</p>
                                        </div>
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










        </div>
    )
}