import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

export const createTweet = async ({ body }) => {
  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw {
      message: "Tweet contains blocked words",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ body });

  return tweet;
};
