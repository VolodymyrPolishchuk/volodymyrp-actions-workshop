// ./src/date-formatter.ts


/* List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	  2001	              Four-digit year
MM	    01-12	              Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	      1-31	              Day of month
DD	    01-31	              Day of month, 2-digits
*/

export function formatDate(format: string, date: Date): string {
    const padZero = (num: number) => num.toString().padStart(2, '0');
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const YYYY = date.getFullYear();
    const YY = YYYY.toString().slice(2);
    const MM = padZero(date.getMonth() + 1);
    const MMM = monthsShort[date.getMonth()];
    console.log({MMM});
    const DD = padZero(date.getDate());
    const D = date.getDate();

    return format
        .replace(/YYYY/g, YYYY.toString())
        .replace(/YY/g, YY)
        .replace(/MMM/g, MMM)
        .replace(/MM/g, MM)
        .replace(/DD/g, DD)
        .replace(/D/g, D.toString());
}