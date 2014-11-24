ol3-legend-control
==================

This project was created with the purpose of learning/using grunt and npm from within visual studio with the new integrations that was made by the aspnet team.
You may read about those here: http://www.hanselman.com/blog/IntroducingGulpGruntBowerAndNpmSupportForVisualStudio.aspx

I have been using npm in the past, though only from the commandline, and it never have found its path all the way into my tooling setup. These new extensions to visual studio (it works with VS2013) is properly going to change this, atleast i now created my first project using the tools.

I am a big fan of typescript and requirejs for AMD loading, so ofcause this example should be about combining these with grunt and no commandline commands.

## Task Runner Explorer

Inside VS, its the Task Runner Explorer that enables all this. Based on the gruntfile.js, a few build tasks are created that can be linked to IDE build events or just run on demand from the explorer.

From gruntfile.js, new tasks that combine other tasks can also be created easily. So this is really a huge step forward for working with frontend stuff.


[Task Runner and NPM Install in VS.](https://aialqq-bn1305.files.1drv.com/y2pBDOk-sxJy3YCTLorb_ng2FPML1gl-LZrRM56AG3Kz_uCvHEpVZStuGqa688N3nr9KYVZ-sGNfvIl86O7uldOiv8KEKgRVUD68YZnRA22q2Y/grunt-npm-vs2013-integration.png?psid=1)

##Next Step
The next step is ofcause to finish my control for ol3 and try a few more features that has now been enabled for me by these tools. One I am most interested in right now is the https://github.com/DefinitelyTyped/tsd project.

## Question
One question still remain for me, in this project I started out from a normal "Html Application with Typescript" which has all the typescript build tasks included with msbuild and also it creates a empty dll. What would be the best visual studio project to create initial to get no msbuild stuff.

