import useDictionaryStore from "@/store/store";
import Description from "@/components/Description";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Head from "next/head";
import Meaning from "@/components/Meaning";
import Spinner from "@/components/Spinner";

export default function Home() {
  const { meaning, error, loading } = useDictionaryStore();

  return (
    <main className="font-mono min-h-screen dark:bg-[#202020]">
      <Head>
        <title>WordWise</title>
      </Head>
      <section className="max-w-2xl mx-auto p-8 space-y-12">
        <Header />
        <Input />
        <section>
          {loading ? (
            <Spinner />
          ) : meaning || error ? (
            <>
              <Description meaning={meaning} error={error} />
              {meaning?.meanings.map((item, _idx) => (
                <Meaning meanings={item} key={_idx} />
              ))}
            </>
          ) : (
            <div className="text-center space-y-2">
              <h1 className="text-xl">
                Instant word definitions at your fingertips!
              </h1>
              <p>
                Start by&nbsp;
                <span className="text-violet-700 dark:text-violet-500 underline">
                  typing
                </span>
                &nbsp;a word in search bar above.
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
