const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { initRepo } = require('./controllers/init');
const { addRepo } = require('./controllers/add');

yargs(hideBin(process.argv))
  .command('init', 'Initialise a new repository', {}, initRepo)
  .command('add<file>', 'Add a new repository',(yargs)=> {
    yargs.positional("file",{
        describe:"File added to staging area",
        type:"string",
    })
  }, addRepo)//file parameter
  .demandCommand(1, 'You need at least one command')
  .help()
  .argv;
