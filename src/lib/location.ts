export function extractTitleFromGoogleMapsLink(url: string): string | null {
    const regex = /\/place\/([^\/]+)\/@/;
    const match = url.match(regex);
  
    if (match && match[1]) {
      // Decoding URL components (if encoded) and replacing '+' with spaces
      const decodedTitle = decodeURIComponent(match[1]).replace(/\+/g, ' ');
      return decodedTitle;
    } else {
      return null;
    }
  }