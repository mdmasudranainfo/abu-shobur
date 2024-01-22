module.exports = {
     reactStrictMode: true,
     images: {
          remotePatterns: [
               {
                    protocol: "https",
                    hostname: "i.ibb.co",
               },
               {
                    protocol: "https",
                    hostname: "cdn-images.farfetch-contents.com",
               },
              
              
               {
                    protocol: "https",
                    hostname: "firebasestorage.googleapis.com"
               }

          ],
     },
};