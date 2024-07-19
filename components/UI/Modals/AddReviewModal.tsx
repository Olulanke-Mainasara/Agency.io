"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import { FaStar } from "react-icons/fa";

import { Button } from "../ShadUI/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ShadUI/card";
import { Dialog, DialogContent, DialogTrigger } from "../ShadUI/dialog";
import { Input } from "../ShadUI/input";
import { Label } from "../ShadUI/label";
import { Textarea } from "../ShadUI/textarea";
import { ToastAction } from "../ShadUI/toast/toast";
import { useToast } from "../ShadUI/toast/use-toast";

export function AddReviewModal() {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState<number | null>(null);
  const { toast } = useToast();

  const displaySuccessToast = () => {
    toast({
      title: "Your message has been sent.",
      description:
        "Thank you for your review, we will take a thorough look at it to look for ways to better serve you :)",
    });
  };

  const displayErrorToast = () => {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with sending your review.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group flex flex-col items-center justify-center space-y-2 rounded-xl border border-brandDark p-6 duration-300 hover:cursor-pointer hover:border-black dark:hover:border-white dark:hover:text-white">
          <PlusCircle
            className="text-brandDark duration-300 group-hover:text-black dark:group-hover:text-white"
            size={55}
          />
          <p className="text-xl md:text-2xl">Add your own review</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <Card className="w-full">
          <CardHeader className="flex-row items-center justify-between px-0">
            <div>
              <h1 className="text-2xl">Write a review</h1>
              <p className="text-sm opacity-50">How well did we do?</p>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <button
                  key={ratingValue}
                  onClick={() => setRating(ratingValue)}
                >
                  <FaStar
                    size={25}
                    className={`duration-150 hover:text-brandDark ${
                      rating == ratingValue ? "text-brandDark" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="grid gap-6 px-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fname">First name</Label>
                <Input id="fname" placeholder="Chris" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lname">Last name</Label>
                <Input id="lname" placeholder="Jones" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="title">Title of review</Label>
              <Input id="title" placeholder="My trip to the Bahamas..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Please include all information relevant to your trip."
              />
            </div>
          </CardContent>
          <CardFooter className="justify-between space-x-2 px-0">
            <Button
              onClick={() => {
                displaySuccessToast();
                setOpen(false);
                setRating(null);
              }}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
