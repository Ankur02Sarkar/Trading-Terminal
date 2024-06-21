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
        <div className="bg-green-500 rounded-sm grid grid-cols-5">
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
        <div className="bg-blue-500 rounded-sm"></div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen m-4 grid grid-cols-[2fr_1fr] gap-2">
      <CryptoHeader />
      <div className="bg-red-500 rounded-sm"></div>
    </div>
  );
}
