import React, { useEffect, useState } from 'react';

interface TyperProps {
    lines: string[];
    timing?: number;
}

interface TyperState {
    currentLine: number;
    currentLinePosition: number;
    totalLines: number;
    content: string;
    complete: boolean;
}

const Typer = ({lines, timing}: TyperProps) => {
    const [state, setState] = useState<TyperState>({
        currentLine: 0,
        currentLinePosition: 0,
        totalLines: lines.length,
        content: '',
        complete: false
    });

    const type = () => {
        let tempState = {...state};

        if (lines.length === 0 || tempState.complete) {
            return;
        }

        if (tempState.currentLine === lines.length) {
            tempState.content = tempState.content.substring(0, tempState.content.length - 1);
            tempState.complete = true;

            setState(tempState);

            return;
        }

        tempState.content = tempState.content.substring(0, tempState.content.length - 1) +  lines[tempState.currentLine][tempState.currentLinePosition] + '_';
        tempState.currentLinePosition++;

        if (tempState.currentLinePosition === lines[tempState.currentLine].length) {
            tempState.currentLine++;
            tempState.currentLinePosition = 0;
        }

        setTimeout(() => {
            setState(tempState);
        }, timing ?? 250);
    }

    useEffect(() => {
        type();
    }, [state.content]);

    return <div className="flex flex-column">{state.content}</div>
}

export default Typer;