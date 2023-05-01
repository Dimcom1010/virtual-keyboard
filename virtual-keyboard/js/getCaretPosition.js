// function return position caret
export function getCaretPosition(element) {
    if (element.selectionStart) {
        return element.selectionStart;
    } else if (document.selection) {
        element.focus();
        const range = document.selection.createRange();
        if (range == null) {
            return 0;
        }
        const rangeElement = element.createTextRange(),
        ranges = rangeElement.duplicate();
        rangeElement.moveToBookmark(range.getBookmark());
        ranges.setEndPoint('EndToStart', rangeElement);
        return ranges.text.length;
    }
    return 0;
}