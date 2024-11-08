import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

export const createTweet = async ({ body }) => {
  // find blocked words in tweet body and if exists don't create tweet
  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw {
      message: "Tweet contains blocked words!",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ body });

  return tweet;
};
