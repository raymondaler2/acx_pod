const mongoose = require("mongoose");

// ! ADD FEATURED SOP IN SCHEMA
const sopSchema = mongoose.Schema(
  {
    featured: {
      type: Boolean,
      default: false,
    },
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
    user_id: {
      type: String,
      required: [true, "Please enter user_id"],
    },
    comments: {
      type: [
        {
          content: {
            type: String,
            required: [true, "Please enter comment content"],
          },
          user_id: {
            type: String,
            required: [true, "Please enter user_id"],
          },
          time: {
            type: Date,
            default: Date.now,
          },
          likes: {
            type: [String],
            default: [],
          },
          replies: {
            type: [
              {
                content: {
                  type: String,
                  required: [true, "Please enter reply content"],
                },
                user_id: {
                  type: String,
                  required: [true, "Please enter user_id for reply"],
                },
                likes: {
                  type: [String],
                  default: [],
                },
                time: {
                  type: Date,
                  default: Date.now,
                },
              },
            ],
            default: [],
          },
        },
      ],
    },
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
