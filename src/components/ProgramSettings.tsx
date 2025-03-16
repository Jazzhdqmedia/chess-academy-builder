
import React, { useState } from "react";
import { Pencil, Trash, Plus } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";
import { useToast } from "@/hooks/use-toast";

interface Program {
  id: string;
  title: string;
  description: string;
}

const ProgramSettings: React.FC = () => {
  const { programs, addProgram, updateProgram, removeProgram } = useAcademy();
  const { toast } = useToast();
  const [editMode, setEditMode] = useState<string | null>(null);
  const [newProgram, setNewProgram] = useState<Program>({
    id: "",
    title: "",
    description: "",
  });
  const [editedProgram, setEditedProgram] = useState<Program>({
    id: "",
    title: "",
    description: "",
  });

  const handleAddProgram = () => {
    if (!newProgram.title || !newProgram.description) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Generate ID from title if not provided
    const id = newProgram.id || newProgram.title.toLowerCase().replace(/\s+/g, "-");
    
    addProgram({ ...newProgram, id });
    setNewProgram({ id: "", title: "", description: "" });
    
    toast({
      title: "Program added",
      description: `${newProgram.title} has been added to your programs`,
    });
  };

  const startEditing = (program: Program) => {
    setEditMode(program.id);
    setEditedProgram({ ...program });
  };

  const saveEdits = () => {
    if (!editedProgram.title || !editedProgram.description) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    updateProgram(editedProgram.id, editedProgram);
    setEditMode(null);
    
    toast({
      title: "Program updated",
      description: `${editedProgram.title} has been updated`,
    });
  };

  const cancelEditing = () => {
    setEditMode(null);
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      removeProgram(id);
      toast({
        title: "Program deleted",
        description: `${title} has been removed from your programs`,
      });
    }
  };

  return (
    <section className="chess-card">
      <h2 className="text-xl font-serif mb-6">Programs</h2>
      
      <div className="space-y-8">
        {/* Program list */}
        <div>
          <h3 className="text-sm font-medium mb-3">Current Programs ({programs.length})</h3>
          
          <div className="divide-y border rounded-md">
            {programs.map((program) => (
              <div key={program.id} className="p-4">
                {editMode === program.id ? (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={editedProgram.title}
                        onChange={(e) => setEditedProgram({...editedProgram, title: e.target.value})}
                        className="chess-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea
                        value={editedProgram.description}
                        onChange={(e) => setEditedProgram({...editedProgram, description: e.target.value})}
                        className="chess-input w-full"
                        rows={3}
                      />
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <button onClick={saveEdits} className="chess-btn-primary px-3 py-1 text-sm">
                        Save
                      </button>
                      <button onClick={cancelEditing} className="chess-btn-outline px-3 py-1 text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium">{program.title}</h4>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => startEditing(program)}
                          className="text-chess-charcoal/60 hover:text-chess-mahogany"
                          aria-label={`Edit ${program.title}`}
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(program.id, program.title)}
                          className="text-chess-charcoal/60 hover:text-chess-mahogany"
                          aria-label={`Delete ${program.title}`}
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-chess-charcoal/70 mt-1">{program.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Add new program */}
        <div className="bg-chess-light/30 rounded-md p-4 space-y-3">
          <h3 className="font-medium flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            Add New Program
          </h3>
          
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={newProgram.title}
              onChange={(e) => setNewProgram({...newProgram, title: e.target.value})}
              className="chess-input w-full"
              placeholder="e.g., Summer Camp"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={newProgram.description}
              onChange={(e) => setNewProgram({...newProgram, description: e.target.value})}
              className="chess-input w-full"
              placeholder="Brief description of the program"
              rows={3}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              ID <span className="text-xs font-normal text-chess-charcoal/60">(Optional - will be generated from title if empty)</span>
            </label>
            <input
              type="text"
              value={newProgram.id}
              onChange={(e) => setNewProgram({...newProgram, id: e.target.value})}
              className="chess-input w-full"
              placeholder="e.g., summer-camp"
            />
          </div>
          
          <div className="pt-2">
            <button onClick={handleAddProgram} className="chess-btn-primary px-4 py-2">
              Add Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSettings;
