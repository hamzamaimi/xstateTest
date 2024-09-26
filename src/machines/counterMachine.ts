import { assign, createMachine, setup } from "xstate";

export const counterMachine = setup({
    types: {
        context: {} as { count: number },
        events: {} as
        | { type: 'increment' }
        | { type: 'decrement' }
        | { type: 'reset' }
    },
    actions: {
        increment: assign({
            count: ({ context }) => context.count + 1
        }),
        decrement: assign({
            count: ({ context }) => context.count -1
        }),
        reset: assign({
            count: ({ context }) => context.count = 0
        })
    }
}).createMachine({
    id: 'counter',
    context: {count: 0},
    on: {
        increment: { actions: 'increment' },
        decrement: { actions: 'decrement' },
        reset: { actions: 'reset' }
    }
})