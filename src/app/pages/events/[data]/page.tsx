"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLiveEvent } from "@/service/api/api";
import ShowDetails from "@/app/views/show-details/page";
import { LiveEventImage } from "@/app/data/live-events/data";

export default function EventData() {
  const [data, setData] = useState<LiveEventImage | null>(null);
  const router = useParams();
  useEffect(() => {
    const liveEventId = Array.isArray(router.data)
      ? router.data[0]
      : router.data;
    if (liveEventId) {
      const data = getLiveEvent(parseInt(liveEventId));
      setData(data);
    }
  }, [router.data]);
  return data ? <ShowDetails data={data} /> : <h3>Event Not Found</h3>;
}
