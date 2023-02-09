import { json, LoaderArgs, Response } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import Page from "~/components/Page";
import Text from "~/components/Text";
import { Activity } from "~/utils/activities.type";
import {
  createClient as createPexelsClient,
  ErrorResponse,
  Photo,
  PhotosWithTotalResults,
} from "pexels";
import { getRandomInt, removeStopwords } from "~/utils";
import mockData from "~/utils/mockData";

const DEFAULT_IMAGE = mockData.image;

/*
const supportedCategories = [
  "education",
  "recreational",
  "social",
  "DIY",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];
*/

const filterLabels = ["educational", "recreational", "relaxing"];

const getCategoryParamFromLabel = (label: string) => {
  type Dict = { [key: string]: string };
  const categoryMap: Dict = {
    educational: "education",
    recreational: "recreational",
    relaxing: "relaxation",
  };
  return label in categoryMap ? `/?type=${categoryMap[label]}` : "";
};

export async function loader({ request }: LoaderArgs) {
  if (process.env.DEBUG)
    return {
      activity: mockData.activity,
      image: mockData.image,
    };

  if (!process.env.NEW_ACTIVITY_URL) return null;
  const url = new URL(request.url);
  let apiURL = process.env.NEW_ACTIVITY_URL + url.search;
  const res: Activity = await (await fetch(apiURL)).json();

  if (!res.activity) {
    throw new Response("No activity was found matching the filters. Please try again.", {
      status: 404,
    });
  }
  let image = DEFAULT_IMAGE;
  if (process.env.PEXELS_KEY) {
    const pexels = createPexelsClient(process.env.PEXELS_KEY);
    let pexelsResponse: PhotosWithTotalResults | ErrorResponse;
    try {
      pexelsResponse = await pexels.photos.search({
        page: 1,
        per_page: 20,
        query: removeStopwords(res.activity),
        curated: "curated",
      });
    } catch (e) {
      console.log("error in pexels");
      throw e;
    }
    /* @ts-ignore */
    image = pexelsResponse.photos[getRandomInt(0, pexelsResponse.photos.length)];
  }

  return json({ activity: res, image });
}

export default function Index() {
  const data = useLoaderData<{ activity: Activity; image: Photo }>();
  const { activity, image } = data;
  return (
    <Page
      style={{
        background: ` linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),url(${image.src.large2x}),url(${image.src.large})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="text-white text-2xl justify-between"
    >
      <p>If you're bored...</p>
      <div className="text-2xl lg:text-4xl">
        <Text text={activity.activity} />
      </div>
      <div className="text-center">
        Look for
        {filterLabels.map((label, i) => (
          <div key={label} className="inline-block">
            <a className="inline-block relative ml-1 p-1" href={getCategoryParamFromLabel(label)}>
              {label}
              <span
                aria-hidden="true"
                className="mb-0.5 h-0.5 w-full bg-white block rounded-full"
              />
              <span
                aria-hidden="true"
                className="hover-underline hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 bg-white block rounded-full"
              />
            </a>
            ,
          </div>
        ))}
        &nbsp;or
        <a className="inline-block relative mx-1 p-1" href="/">
          random
          <span aria-hidden="true" className="mb-0.5 h-0.5 w-full bg-white block rounded-full" />
          <span
            aria-hidden="true"
            className="hover-underline hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 bg-white block rounded-full"
          />
        </a>
        activities.
      </div>
      <a
        className="text-gray-300 text-sm lg:text-base absolute bottom-5 right-5"
        href={image.photographer ? image.photographer_url : "https://www.pexels.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Photo by {image.photographer ? image.photographer + " @ " : ""} Pexels
      </a>
    </Page>
  );
}

export function CatchBoundary() {
  const err = useCatch();
  console.log(err);
  return <div>{err.data}</div>;
}
