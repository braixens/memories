export function getUrl(presenceUrl: string | undefined) {
    if (undefined === presenceUrl) {
        return undefined;
    }
    const parts = presenceUrl.split("/https/");
    return "https://" + parts[1];
}
