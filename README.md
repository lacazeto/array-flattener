## Array flattener

### Installation

run `npm install`

### Usage

Run the main file with ts-node as `npx ts-node index.ts`.

You can also pass an array as JSON as argument and see its result after being processed in the console. Ex:

```
> npx ts-node index.ts '[1,2,[3,4,[5,6],[7,8,[10,11]],[12,13,[[[15]]]]]]'
[1, 2,  3,  4,  5,  6, 7, 8, 10, 11, 12, 13, 15] // output
```

### Testing

Run `npm run test`
