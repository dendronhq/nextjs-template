import { DendronNote } from "@dendronhq/common-frontend";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";
import DendronSEO from "../components/DendronSEO";
import {
  getConfig,
  getNoteBody,
  getNoteBodyMD,
  getNotes,
} from "../utils/build";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Home({
  note,
  config,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <DendronSEO note={note} config={config} />
      MDXREMOTE
      <MDXRemote {...source} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const note = getNotes().noteIndex;
  const source = await getNoteBodyMD(note.id);
  const mdxSource = await serialize(source);
  const config = await getConfig();
  return {
    props: {
      source: mdxSource,
      note,
      config,
    },
  };
};
