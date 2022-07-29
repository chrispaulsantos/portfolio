import React, { useEffect, useState } from 'react';

interface TyperProps {
    lines: string[];
    timing?: number;
    delay?: number;
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

    useEffect(() => {
        // Need to return cleanup to prevent mem leak error since timeout
        // hangs around otherwise
        const id = setTimeout(() => {
            setState(currentState => {
                let tempState = {...currentState};

                if (lines.length === 0 || tempState.complete) {
                    return tempState;
                }

                if (tempState.currentLine === lines.length) {
                    tempState.content = tempState.content.substring(0, tempState.content.length - 1);
                    tempState.complete = true;

                    return tempState;
                }

                tempState.content = tempState.content.substring(0, tempState.content.length - 1) +  lines[tempState.currentLine][tempState.currentLinePosition] + '_';
                tempState.currentLinePosition++;

                if (tempState.currentLinePosition === lines[tempState.currentLine].length) {
                    tempState.currentLine++;
                    tempState.currentLinePosition = 0;
                }

                return tempState;
            });
        }, timing ?? 50);

        return () => clearTimeout(id);
    }, [state.content, timing, lines]);

    return <div className="typer">{state.content}</div>
}

export default Typer;