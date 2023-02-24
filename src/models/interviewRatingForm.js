const mongoose = require('mongoose');

// * Creation of Interview Rating Schema

const interviewRatingSchema = new mongoose.Schema({

    // * IR => Interview Rating
    // ! Introductionary Information Datatype

    IRDate: {
        type: Date,
        default: Date.now,
    },

    IRCandidateName: {
        type: String,
    },

    IRStation: {
        type: String,
    },

    IRPositionConsideredFor: {
        type: String,
    },

    IRDepartment: {
        type: String,
    },

    IRDepartmentHead: {
        type: String,
    },

    IRInterviewTime: {
        type: Date,
    },
   
    IRCandidateReferredBy: {
        type: String,
    },

    IRInterviewedBy: {
        type: String,
    },


    // ! Attributes DataType

    IRAttributes: {
        type: [{

            // ! Job Skills and Education Objects 

          IRJobSkillEducation: {
            
            IRWorkExperience: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRWorkKnowledge: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRKeyAchievement: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRAcademicPerformance: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRComputerSkill: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
        },

        // ! Competences Objects

        IRCompetences: {

            IRCareerObjective: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRSelfDetermination: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRAbilityToLearn: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRMotivation: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRMobility: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRManagerialAbility: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRPlanOrganizeEffect: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
   
            IRResponsibility: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRInitiativeCreativity: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
            
            IRDecisionMaking: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRReliability: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
        },

        // ! Attitude Objects

        IRAttitude: {
            
            IRAttire: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRConfidence: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRSpeechTone: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },

            IRCommunication: {
                type: Number,
                max: 10,
                  validate(value) {
                    if (value > 10) {
                        throw new Error("Please Enter less than or equal to 10");
                    }
                }
            },
        }
        }],
        default: []
    },

    
    // ! Comments, Results and Suggestions DataType
    
    IRStrenghts: {
        type: String
    },

    IRWeakness: {
        type: String
    },
    
    IRComments: {
        type: String
    },

    IRSalaryExpectations: {
        type: Number
    },

    IRConveyance: {
        type: String
    },

    IRSalaryOffered: {
        type: Number
    },

    IRSecondInterviewDateTime: {
        type: Date()
    },

    IRSecondInterviewerName: {
        type: String
    },

    IRProbationPermanent: {
        type: [{
          IRProbPerOption: {
            type: String, 
            enum: ['probation', 'permanent'], // * Enum to restrict the value from the following
          }
        }],
        default: []
    },
    
    IRRecommendation: {
        type: [{
          IRRecommendationOption: {
            type: String, 
            enum: ['selected', 'notSelected', 'heldForFurtherComparison'], // * Enum to restrict the value from the following
          }
        }],
        default: []
    },
    
});


// * Creation of Model

const interviewRating = mongoose.model('InterviewRating', interviewRatingSchema);
module.exports = interviewRating;






























// // ! This the logic of getting the total results from the Attributes
// // ? Where and how it is implemented in the interviewrating model
// // * Calculate total score
// const subAttributes = Object.values(interviewRating.IRAttributes)
//   .concat(Object.values(interviewRating.IRCompetences))
//   .concat(Object.values(interviewRating.IRAttitude))
//   .flat();
// const totalScore = subAttributes.reduce((acc, curr) => acc + curr, 0);