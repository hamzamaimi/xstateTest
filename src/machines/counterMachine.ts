import { assign, createMachine, setup } from "xstate";

export const counterMachine = setup({
    types: {
        context: {} as { count: number, previousCount: number },
        events: {} as
        | { type: 'increment' }
        | { type: 'decrement' }
        | { type: 'reset' }
        | { type: 'undo' }
    },
    actions: {
        increment: assign({
            previousCount: ({ context }) => context.count,
            count: ({ context }) => context.count + 1
        }),
        decrement: assign({
            previousCount: ({ context }) => context.count,
            count: ({ context }) => context.count -1
        }),
        reset: assign({
            previousCount: ({ context }) => context.count,
            count: ({ context }) => context.count = 0
        }),
        undoLastOperation: assign({
            count: ({ context }) => context.count = context.previousCount
        })
    }
}).createMachine({
    id: 'counter',
    context: {count: 0, previousCount: 0},
    on: {
        increment: { actions: 'increment' },
        decrement: { actions: 'decrement' },
        reset: { actions: 'reset' },
        undo: { actions: 'undoLastOperation' }  
    }
})