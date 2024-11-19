import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="w-max md:hidden">
                    <Menu />
                    <span className="sr-only">Open mobile nav</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="text-center">
                        Seren_Modz 21
                    </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col gap-4">
                    <a href="/">
                        <Button variant="ghost" className="w-full">
                            Home
                        </Button>
                    </a>

                    <a href="/projects">
                        <Button variant="ghost" className="w-full">
                            Projects
                        </Button>
                    </a>

                    <a href="/referrals">
                        <Button variant="ghost" className="w-full">
                            Referrals
                        </Button>
                    </a>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
