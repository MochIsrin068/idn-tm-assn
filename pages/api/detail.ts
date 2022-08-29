import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  image: string;
  fullname: string;
  followers: number;
  following: number;
  about: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    image: faker.image.avatar(),
    fullname: faker.name.fullName(),
    followers: faker.datatype.number(),
    following: faker.datatype.number(),
    about: faker.lorem.paragraph(),
  });
}
