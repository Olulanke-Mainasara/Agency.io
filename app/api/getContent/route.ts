import { NextRequest, NextResponse } from "next/server";
import { getBlog, getPost } from "@/sanity/lib/getBlog";
import { getCountries, getCountry } from "@/sanity/lib/getCountry(ies)";
import { getExperience, getExperiences } from "@/sanity/lib/getExperience(s)";
import { getLocation, getLocations } from "@/sanity/lib/getLocation(s)";
import { getNearbyLocations } from "@/sanity/lib/getNearbyLocations";
import { getPlace, getPlaces } from "@/sanity/lib/getPlace(s)";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const action = body.action;

  let queryResult: any;

  switch (action) {
    case "getBlog":
      queryResult = await getBlog();
      break;
    case "getPost":
      queryResult = await getPost(body.specific);
      break;
    case "getCountries":
      queryResult = await getCountries(body.specific);
      break;
    case "getCountry":
      queryResult = await getCountry(body.specific);
      break;
    case "getExperiences":
      queryResult = await getExperiences();
      break;
    case "getExperience":
      queryResult = await getExperience(body.specific);
      break;
    case "getLocations":
      queryResult = await getLocations(body.specific);
      break;
    case "getLocation":
      queryResult = await getLocation(body.specific);
      break;
    case "getNearbyLocations":
      queryResult = await getNearbyLocations(body.specific, 10, 10);
      break;
    case "getPlaces":
      queryResult = await getPlaces(body.specific);
      break;
    case "getPlace":
      queryResult = await getPlace(body.specific);
      break;

    default:
      queryResult = [];
      break;
  }

  return NextResponse.json(queryResult);
}
