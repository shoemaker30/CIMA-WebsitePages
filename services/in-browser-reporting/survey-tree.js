//A JSON Layout for the structure of the survey
var tree = 
    {   
        "title":"CIMA Decision Tree",
        "version":2.0,
        "last-edited":"5/30/2021",
        "authors":["Harrison Randolph, Eric Shoemaker"],
        "survey":
        [
            {
                "object_type":"Sign/Signal",
                "get_description":false,
                "get_rating":false,
                "details":
                [
                    {
                        "primary_issue":"Signal Timing",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": 
                        [
                            {
                                "issue":"Traffic signal disrupts regular flow",
                                "get_description": false,
                                "get_rating":true
                            },
                            {
                                "issue":"Pedestrian crossing signal is not adequately timed",
                                "get_description": false,
                                "get_rating":false
                            },
                            {
                                "issue":"Other",
                                "get_description": true,
                                "get_rating":true
                            }
                        ], 
                        "select_multiple": false
                    },
                    {
                        "primary_issue":"Broken Signal",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": 
                        [
                            {
                                "issue":"Pedestrian crossing button does not function properly",
                                "get_description": true,
                                "get_rating":false
                            },
                            {
                                "issue":"Traffic signal does not function properly",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Other",
                                "get_description":true,
                                "get_rating":true
                            }
                        ],
                        "select_multiple": false
                    },
                    {
                        "primary_issue":"Visibility",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": 
                        [
                            {
                                "issue":"Sign/signal view is obstructed", 
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Sign/signal is missing", 
                                "get_description":false,
                                "get_rating":false
                            },
                            {
                                "issue":"Sign is faded/damaged making it hard to read", 
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Sign exibits confusing/misleading wording", 
                                "get_description":false,
                                "get_rating":false
                            },
                            {
                                "issue":"Signal is too dim, or its light(s) are burnt out",  
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Other" ,
                                "get_description":true,
                                "get_rating":true
                            }
                        ],
                        "select_multiple": true
                    },
                    {
                        "primary_issue":"Other",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple": false
                    }
                ]
            },
            {
                "object_type":"Sidewalk",
                "get_description":false,
                "get_rating":false,
                "details":
                [
                    {
                        "primary_issue":"Cracking",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Unevenness",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Pitting",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Excessive Water/Ice Accumulation",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Other",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    }
                ]
            },
            {
                "object_type":"Parking Lot/Garage",
                "get_description":false,
                "get_rating":false,
                "details":
                [
                    {
                        "primary_issue":"Cracking",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Line Visibility",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Potholes",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Excessive Water/Ice Accumulation",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Accessibility/ADA Compliance",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues":
                        [
                            {
                                "issue":"Adequate ramps/railing are not provided",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"ADA compliant entrances are not properly marked",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Elevators do not function",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Doorway/passageway is to narrow",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Other",
                                "get_description":true,
                                "get_rating":false
                            }
                        ],
                        "select_multiple":true
                    },
                    {
                        "primary_issue":"Other",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    }
                ]
            },
            {
                "object_type":"Building",
                "get_description":false,
                "get_rating":false,
                "details":
                [
                    {
                        "primary_issue":"Structural Cracking",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues":null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Signage",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues":
                        [
                            {
                                "issue":"Sign view is obstructed",
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Sign is missing",
                                "get_description":false,
                                "get_rating":false
                            },
                            {
                                "issue":"Sign is faded/damages making it hard to read",
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Sign exhibits confusing/misleading wording",
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Other",
                                "get_description":true,
                                "get_rating":true
                            }
                        ],
                        "select_multiple":true
                    },
                    {
                        "primary_issue":"Accessibility/ADA Compliance",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues":
                        [
                            {
                                "issue":"Adequate ramps/railing are not provided",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"ADA compliant entrances are not properly marked",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Elevators do not function",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Doorway/passageway is to narrow",
                                "get_description":true,
                                "get_rating":false
                            },
                            {
                                "issue":"Other",
                                "get_description":true,
                                "get_rating":false
                            }
                        ],
                        "select_multiple":true
                    },
                    {
                        "primary_issue":"Other",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    }
                ]
            },
            {
                "object_type":"Pedestrian Bridge",
                "details":
                [
                    {
                        "primary_issue":"Structural Cracking",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues":null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Signage",
                        "get_description":false,
                        "get_rating":false,
                        "specific_issues":
                        [
                            {
                                "issue":"Sign view is obstructed",
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Sign is missing",
                                "get_description":false,
                                "get_rating":false
                            },
                            {
                                "issue":"Sign is faded/damages making it hard to read",
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Sign exhibits confusing/misleading wording",
                                "get_description":false,
                                "get_rating":true
                            },
                            {
                                "issue":"Other",
                                "get_description":true,
                                "get_rating":true
                            }
                        ],
                        "select_multiple":true
                    },
                    {
                        "primary_issue":"Other",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues": null,
                        "select_multiple":false
                    }
                ]
            },
            {
                "object_type":"Roadway",
                "get_description":false,
                "get_rating":false,
                "details":
                [
                    {
                        "primary_issue":"Cracking",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Line Visibility",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Potholes",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Excessive Water/Ice Accumulation",
                        "get_description":false,
                        "get_rating":true,
                        "specific_issues": null,
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Visibility",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues": 
                        [
                            {
                                "issue":"Inadequate warning for hidden driveways/entrances",
                                "get_description":false,
                                "get_rating":false
                            },
                            {
                                "issue":"Inadequate line of sight for merging traffic",
                                "get_description":false,
                                "get_rating":false
                            }
                        ],
                        "select_multiple":false
                    },
                    {
                        "primary_issue":"Other",
                        "get_description":true,
                        "get_rating":false,
                        "specific_issues":null,
                        "select_multiple":false
                    }
                ]
            },
            {
                "object_type":"Other",
                "get_description":true,
                "get_rating":true,
                "details":null
            }
        ]
    }

