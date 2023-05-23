const fs = require('fs')
const path = require('path')

const { execSync } = require('child_process')
/**
 * serach files recursively
 *  Option: you can limit search path depth.
 * @param {string} targetpath search base path
 * @param {number} depth recursive depth. by default = no depth limit
 * @returns list of absolute path of files in targetpath
*/
const parentFolder = "C:/Users/HP/Documents/Harshit/Creative/matterJs/project/PhysicsModels"
var GetFilelistRecursively = ((targetpath, depth = -1, excludes = []) => {
    let strResult = ''
    let dirs = fs.readdirSync(targetpath);
    dirs = dirs.filter(function (item) {
        var shouldKeep = true
        for (const exc of excludes) {
            if (item == exc) {

                shouldKeep = false
                break
            }
        }
        return shouldKeep
    })
    dirs.forEach(file => {
        let filepath = targetpath + "/" + file;
        if (fs.lstatSync(filepath).isDirectory()) {
            if (depth == 0) return strResult
            strResult = `${strResult} ${GetFilelistRecursively(filepath, depth - 1)}`
        } else {
            const relativePath = path.relative(parentFolder, filepath)
            if (relativePath.includes('.js')) {
                strResult = `${strResult} ${relativePath}`


            }
        }
    });
    return strResult;
});
// usage: 
const excludes = ['node_modules', '.vscode', 'package.json', 'package-lock.json', 'testing']

const helper = (GetFilelistRecursively(parentFolder + '/helper', -1, excludes));
execSync(`uglifyjs -o src/helper.js  ${helper}`)

const classes = (GetFilelistRecursively(parentFolder + '/classes', -1, excludes));
execSync(`uglifyjs -o src/classes.js  ${classes}`)

const handle = (GetFilelistRecursively(parentFolder + '/handle', -1, excludes));
execSync(`uglifyjs -o src/handle.js  ${handle}`)

const createStuff = (GetFilelistRecursively(parentFolder + '/createStuff', -1, excludes));
execSync(`uglifyjs -o src/createStuff.js  ${createStuff}`)
