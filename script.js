const quoteText = document.getElementById("quoteText");
const authorName = document.getElementById("authorName");

const images = [
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1642&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80",
  "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
  "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

async function generateQuoteandImage() {
  // const quoteText = document.getElementById("quoteText");
  // const authorName = document.getElementById("authorName");

  // Start with opacity 0 for fade effect
  quoteText.style.opacity = "0";
  authorName.style.opacity = "0";
  // document.body.style.opacity = "0";

  try {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    const quotes = await response.json();

    setTimeout(() => {
      quoteText.textContent = `"${quotes.quote}"`;
      quoteText.style.opacity = "1"; // Fade in after changing text
      authorName.textContent = `- ${quotes.author}`;
      authorName.style.opacity = "1";
      const randomIndex = Math.floor(Math.random() * images.length);
      document.body.style.backgroundImage = `url(${images[randomIndex]})`;
      document.body.style.opacity = "1"; // Fade in after changing text
    }, 100); // Delay to sync with CSS transition
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteText.textContent = "Oops! Failed to load quote.";
    quoteText.style.opacity = "1";
    authorName.style.opacity = "1"; // Ensure fade-in still happens
  }
}

// async function generateRandomImage() {
//     try {
//         const response = await fetch(
//           "https://random-image-pepebigotes.vercel.app/api/random-image",
//           {
//             mode: "no-cors",
//           }
//         );
//         document.body.style.backgroundImage = `url('https://source.unsplash.com/random')`;
//     } catch (error) {
//         console.log("Error fetching image:", error );
//     }
// }

// function generateRandomImage() {
//     document.body.opacity = "0";

//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       document.body.style.backgroundImage = `url(${images[randomIndex]})`;
//       document.body.style.opacity = "1"; // Fade in after changing text
//     }, 300);

// }

document.getElementById("generatebtn").addEventListener("click", () => {
  generateQuoteandImage();
  //generateRandomImage();
});

window.onload = generateQuoteandImage;

document.getElementById("copybtn").addEventListener("click", () => {
  navigator.clipboard
    .writeText(quoteText.textContent + authorName.textContent)
    .then(
      function () {
        console.log("Async : Text copied to clipboard");
      },
      function (err) {
        console.error("Async : Could not copy the text");
      }
    );
});

document.body.style.background = `url(${document.body.style.backgroundImage
  .replace('url("', "")
  .replace('")', "")}) center/cover no-repeat`;

function printQuote() {
  try {
    const quoteElement = document.body; // Ensure this exists in HTML

    html2canvas(quoteElement, {
      backgroundColor: null, // Preserve transparency
      useCORS: true, // Load images from external sources if needed
      logging: false, // Disable logging to console
      scale: window.devicePixelRatio, // Improve image quality
    }).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      // Download the image
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = img;
      link.download = "quote.png";
      link.click();
      document.body.removeChild(link);
    });
  } catch (error) {
    console.log("Error in downloading image: ", error);
  }
}

document.getElementById("downloadbtn").addEventListener("click", printQuote);

document.getElementById("shareonX").addEventListener("click", shareonX);

function shareonX() {
  const xShareURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent + "\n" + authorName.textContent}`;
  window.open(xShareURL, "_blank");
}
