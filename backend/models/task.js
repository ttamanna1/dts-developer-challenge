import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true,
  },
  description: { type: String },
  status: {
    type: String,
    enum: ['Todo', 'In-progress', 'Done'],
    default: 'Todo'
  },
  dueDate: { type: Date},
});

export default mongoose.model('Task', taskSchema);