import React, { useState } from 'react'
import { Button, ActionSheet, ActionSheetButton } from 'react-onsenui'

export default function ActionSheetExample() {

    const [open, setOpen] = useState(false);

    const handleClick = () =>{
        setOpen(true)
    }


  return (

  

    <div>
        <Button onClick={handleClick}>Action Sheet Open</Button>
        <ActionSheet isOpen={open} title="action sheet">
            <ActionSheetButton>
                test1
            </ActionSheetButton>
            <ActionSheetButton>
                test2
            </ActionSheetButton>
            <ActionSheetButton>
                test3
            </ActionSheetButton>
            <ActionSheetButton modifier="destructive">
                cancle
            </ActionSheetButton>
            <ActionSheetButton>
                save
            </ActionSheetButton>
        </ActionSheet>
    </div>
  )
}
