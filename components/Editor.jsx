'use client'
import React from 'react'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useTheme } from 'next-themes';
import { useMutation } from '@tanstack/react-query';
import { useHook } from '@/app/hook/useHook';
import Spinner from './ui/Spinner';
import { FolderCheck } from 'lucide-react';

export const Editor = (
    { 
        initialContent,
        editable,
        id
    }
) => {
    const {onUpdate} = useHook()
    const {resolvedTheme} = useTheme()
    const {mutate , isPending} = useMutation(({
        mutationFn : (content) => onUpdate(`http://localhost:3000/api/tasks/${id}` , content)
    }))
    const editor = useCreateBlockNote({
        editable,
        initialContent:
        initialContent
        ? JSON.parse(initialContent) : undefined,
    });
    return (
        <div className = "mt-[2rem] relative">
            <div className = "absolute top-[-2rem] right-0">
                {isPending ? <Spinner/> : <FolderCheck/>}
            </div>
            <BlockNoteView
                initialContent = {initialContent}
                editor={editor}
                theme={ resolvedTheme === "dark" ?  "dark" : "light"}
                onChange={() => {
                    mutate(JSON.stringify(editor.document , null , 2))
                }}
                
            />
        </div>
    )
}
