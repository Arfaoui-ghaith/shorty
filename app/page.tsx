"use client";
import React from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

import { title, subtitle } from "@/components/primitives";
import { toast, Toaster } from "react-hot-toast";

import { useAddShortUrlMutation } from '@/lib/features/shortUrlSlice'
import {Link} from "@heroui/react";

import { FaCheck, FaCopy } from "react-icons/fa6";
import confetti from 'canvas-confetti';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  type ShortUrl = {
    shortened_id: string;
    timestamp: Date;
    url: string;
    _v: number;
    _id: string;
  }

  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (text: string) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast.error("Failed to copy text:");
      }
    }
  };

  const [data, setData] = React.useState<ShortUrl>();
  const [addShortUrl, { isLoading }] = useAddShortUrlMutation();
  const [url, setUrl] = React.useState('');

  const handleConfetti = () => {
    confetti();
  };

  const shorten = async () => {
    try{
      const res = await addShortUrl({payload: {url}}).unwrap();
      setData(res);
      console.log(res);
      onOpen();
      handleConfetti();
      toast.success('successfully processed');
    }catch(err: any){
      console.log(err);
      toast.error(err?.data?.message[0]);
    }
  }

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "blue" })}>Shortify&nbsp;</span>
          <span className={title()}>your links with just one click</span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-4">
          <Input onChange={(e) => setUrl(e.target.value)} fullWidth label="Long URL" size="sm" type="url" />
          <Button
            onPress={shorten}
            color="primary"
            size="lg"
            variant="shadow"
          >
            Shortify
          </Button>
        </div>
      </section>
      <Modal backdrop={"blur"} isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Congratulations 🎉
              </ModalHeader>
              <ModalBody>
                <Link underline="always" href={`${process.env["NEXT_PUBLIC_SERVER_URL"]}/short-url/${data?.shortened_id}`}>
                  {`${process.env["NEXT_PUBLIC_SERVER_URL"]}/short-url/${data?.shortened_id}`}
                </Link>
              </ModalBody>
              <ModalFooter>
                <Button endContent={copied ? <FaCheck /> : <FaCopy />} color="primary" onPress={() => handleCopy(`${process.env["NEXT_PUBLIC_SERVER_URL"]}/short-url/${data?.shortened_id}`)}>
                  Copy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
