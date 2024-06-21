"use client";
import { useState } from "react";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HomeComponent() {
  const statuses = [
    {
      value: "backlog",
      label: "Backlog",
      icon: HelpCircle,
    },
    {
      value: "todo",
      label: "Todo",
      icon: Circle,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: ArrowUpCircle,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircle2,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: XCircle,
    },
  ];

  const ExchangeTabs = () => {
    return (
      <Tabs defaultValue="long" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="long">Long</TabsTrigger>
          <TabsTrigger value="short">Short</TabsTrigger>
          <TabsTrigger value="swap">Swap</TabsTrigger>
        </TabsList>
        <TabsContent value="long">
          <Card>
            <CardHeader>
              <CardTitle>Long</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="short">
          <Card>
            <CardHeader>
              <CardTitle>Short</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="swap">
          <Card>
            <CardHeader>
              <CardTitle>Swap</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    );
  };

  const ComboboxPopover = () => {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(null);

    return (
      <div className="flex items-center m-auto">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-[150px] justify-start"
            >
              {selectedStatus ? (
                <>
                  <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                  {selectedStatus.label}
                </>
              ) : (
                <div>Choose Coin</div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Change status..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find(
                            (priority) => priority.value === value
                          ) || null
                        );
                        setOpen(false);
                      }}
                    >
                      <status.icon
                        className={cn(
                          "mr-2 h-4 w-4",
                          status.value === selectedStatus?.value
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                      <span>{status.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  const CryptoHeader = () => {
    return (
      <div className="grid grid-rows-[1fr_6fr] gap-2">
        <div className="border rounded-sm grid grid-cols-5">
          <ComboboxPopover />
          <div className="text-center flex flex-col justify-center">
            <p>Price</p>
            <p>$64,252.26</p>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Price</p>
            <p>$64,252.26</p>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Price</p>
            <p>$64,252.26</p>
          </div>
          <div className="text-center flex flex-col justify-center">
            <p>Price</p>
            <p>$64,252.26</p>
          </div>
        </div>
        <div className="border rounded-sm"></div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen m-4 grid grid-cols-[2fr_1fr] gap-2">
      <CryptoHeader />
      <ExchangeTabs />
    </div>
  );
}
