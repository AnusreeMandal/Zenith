import { UserButton } from "@clerk/nextjs";



export default function RootLayout({ children }) {
    return (
       <div className="h-screen">
     
        <UserButton aFterSignOutUrl='/'/>
       </div>
    );
}
