"use client"

import { LeadCloumn } from "./column"
{
    interface CellActionProps{
        data: LeadCloumn
    }
}

export const CellAction: React.FC<CellActionProps> = (
    {data:}
) => {
    return(
        <div>
            Action
        </div>
    )
}