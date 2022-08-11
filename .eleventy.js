module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/Illustrations");
    eleventyConfig.addPassthroughCopy("./src/CNAME")
    eleventyConfig.addPassthroughCopy("src/css");
    return {
        dir: {
            input: "src",
            layouts: "_includes",
        },
    };
};