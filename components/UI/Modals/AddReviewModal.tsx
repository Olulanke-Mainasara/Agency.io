"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { PlusCircle } from "lucide-react";
import { FaStar } from "react-icons/fa";

import { Icons } from "@/components/Icons";
import { authContext } from "@/components/Providers/Providers";

import { Button } from "../ShadUI/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ShadUI/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ShadUI/dialog";
import { Input } from "../ShadUI/input";
import { Label } from "../ShadUI/label";
import { Textarea } from "../ShadUI/textarea";
import { ToastAction } from "../ShadUI/toast/toast";
import { useToast } from "../ShadUI/toast/use-toast";

export function AddReviewModal({
  establishmentId,
}: {
  establishmentId?: string;
}) {
  const user = React.useContext(authContext);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState<number | null>(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const resetForm = () => {
    setRating(null);
    setFirstName("");
    setLastName("");
    setTitle("");
    setDescription("");
  };

  const displayErrorToast = () => {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with sending your review.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!user || !rating) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firebaseUid: user.uid,
          firstName,
          lastName,
          title,
          description,
          rating,
          establishmentId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      toast({
        title: "Your review has been sent.",
        description:
          "Thank you for your review, we will take a thorough look at it to look for ways to better serve you :)",
      });
      resetForm();
      setOpen(false);
      router.refresh();
    } catch (error) {
      displayErrorToast();
    } finally {
      setIsLoading(false);
    }
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
      <DialogContent aria-describedby={undefined}>
        <VisuallyHidden.Root>
          <DialogTitle>Add your review</DialogTitle>
        </VisuallyHidden.Root>

        {!user ? (
          <Card className="w-full">
            <CardHeader className="px-0">
              <p className="text-2xl">Sign in to leave a review</p>
              <p className="text-sm opacity-50">
                We ask you to sign in so we can tell real travelers from spam.
              </p>
            </CardHeader>
            <CardFooter className="px-0">
              <Button asChild>
                <Link href={`/login?previous=${pathname}`}>Sign in</Link>
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full">
            <form onSubmit={handleSubmit}>
              <CardHeader className="flex-row items-center justify-between px-0">
                <div>
                  <p className="text-2xl">Write a review</p>
                  <p className="text-sm opacity-50">How well did we do?</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <button
                      key={ratingValue}
                      type="button"
                      disabled={isLoading}
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
                    <Input
                      id="fname"
                      required
                      disabled={isLoading}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Chris"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lname">Last name</Label>
                    <Input
                      id="lname"
                      required
                      disabled={isLoading}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Jones"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="title">Title of review</Label>
                  <Input
                    id="title"
                    required
                    disabled={isLoading}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="My trip to the Bahamas..."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    required
                    disabled={isLoading}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please include all information relevant to your trip."
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-between space-x-2 px-0">
                <Button disabled={isLoading || !rating}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                  )}
                  Submit
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
}
