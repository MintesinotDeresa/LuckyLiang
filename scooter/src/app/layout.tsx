import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
    title: "Lucky Liang E-Scooters",
    description: "Premium E-Scooters in Dubai",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleAnalytics gaId="AW-17700462107" />
        </html>
    );
}
