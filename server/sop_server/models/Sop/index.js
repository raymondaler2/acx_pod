const mongoose = require("mongoose");

const sopSchema = mongoose.Schema(
  {
    sop_title: {
      type: String,
      required: [true, "Please enter an SOP Title"],
    },
    service_tag: {
      type: String,
      required: [true, "Please enter a Service Tag"],
    },
    sop_description: {
      type: String,
      required: [true, "Please enter an SOP Description"],
    },
    // ! add schema for users
    // ! add schema for comments
    milestones: {
      type: [
        {
          milestone_title: {
            type: String,
            required: [true, "Please enter a Milestone Title"],
          },
          milestone_description: {
            type: String,
            required: [true, "Please enter a Milestone Description"],
          },
          checklist: {
            type: [
              {
                checklist_title: {
                  type: String,
                  required: [true, "Please enter a Checklist Title"],
                },
                checklist_status: {
                  required: [true, "Please enter a Checklist Status"],
                  type: Boolean,
                  default: false,
                },
              },
            ],
            required: [true, "Please enter atleast one Checklist"],
          },
        },
      ],
      required: [true, "Please enter atleast one Milestone"],
    },
  },
  {
    timestamps: true,
  }
);

const Sop = mongoose.model("Sop", sopSchema);
module.exports = Sop;
