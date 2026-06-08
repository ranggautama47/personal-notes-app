import React, { useState } from 'react';
import { Trash2, Archive, ArchiveRestore, AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner";

function NoteActionButton({ variant, onClick, isArchived }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    setIsOpen(false);
    onClick();
    
    if (variant === 'delete') {
      toast.success("Catatan berhasil dihapus!");
    } else if (variant === 'archive') {
      toast.success(isArchived ? "Catatan berhasil diaktifkan!" : "Catatan berhasil diarsipkan!");
    }
  };

  if (variant === 'delete') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="note-item__delete-button"
            type="button"
            data-testid="note-item-delete-button"
          >
            <Trash2 size={16} />
            <span>Hapus</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>
          <DialogHeader>
            <DialogTitle>Hapus Catatan</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus catatan ini secara permanen? Tindakan ini tidak dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              style={{
                backgroundColor: 'var(--secondary)',
                color: 'var(--secondary-foreground)',
                border: '1px solid var(--border)',
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Batal
            </button>
            <button
              type="button"
              style={{
                backgroundColor: 'var(--destructive)',
                color: 'var(--destructive-foreground)',
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 hover:opacity-90"
              onClick={handleConfirm}
            >
              Hapus Permanen
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  if (variant === 'archive') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="note-item__archive-button"
            type="button"
            data-testid="note-item-archive-button"
          >
            {isArchived ? <ArchiveRestore size={16} /> : <Archive size={16} />}
            <span>{isArchived ? 'Aktifkan' : 'Arsipkan'}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-center mb-4">
            {isArchived
              ? <ArchiveRestore className="w-12 h-12 text-primary" />
              : <Archive className="w-12 h-12 text-primary" />
            }
          </div>
          <DialogHeader>
            <DialogTitle>{isArchived ? 'Aktifkan Catatan' : 'Arsipkan Catatan'}</DialogTitle>
            <DialogDescription>
              {isArchived 
                ? 'Apakah Anda ingin mengembalikan catatan ini ke daftar aktif?' 
                : 'Apakah Anda ingin memindahkan catatan ini ke dalam arsip?'}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              style={{
                backgroundColor: 'var(--secondary)',
                color: 'var(--secondary-foreground)',
                border: '1px solid var(--border)',
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Batal
            </button>
            <button
              type="button"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 hover:opacity-90"
              onClick={handleConfirm}
            >
              {isArchived ? 'Aktifkan' : 'Arsipkan'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return null;
}

export default NoteActionButton;