"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime =async (page:number,kind:string='movie') => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${8}&order=popularity&kind=${kind}`);

  const data=await response.json();

  return   data?.map((item: AnimeProp, index:number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
};
