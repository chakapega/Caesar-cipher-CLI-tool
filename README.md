# Caesar-cipher-CLI-tool

**[Task](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool)**

1. Clone this repository
2. Go to repository folder
3. Use command
```bash
npm install
```
4. To start programm go to caesar-cipher-CLI-tool folder

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**Usage example:**

```bash
node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
node index --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
node index --action decode --shift 7 --input decoded.txt --output plain.txt
```
