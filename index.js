var a = 1;
var message = "Hello World this is the first message" ;

// git log --oneline 
// 8706e36 (HEAD -> main, origin/main) first commit 

var message = "Adding new change and check the new commit" ;


// b06cc84 (HEAD -> main, origin/main) second commit

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// c2b8ae8 (HEAD -> main, origin/main) third commit

// using git diff we ccan see the current and old changes in the file if we got a lot of changes
// let do 4 th commit


// git show <commit-hash> to see the changes in the commit
// for examople git show c2b8ae8 ,, will show me the changes in this commit , which is the third commit

// now as i reverted this in local , so my origin branch is 2 commit ahead 
// since i want my origina repo also get reverted to this commit 
// i need to push the chagnes using git push origin main --force

        // git log --oneline           
        // 75ac70c (HEAD -> main, origin/main) fifth commit
        // 86972c2 fourth commit
        // c2b8ae8 third commit
        // b06cc84 second commit

// Lets add the new commit now 