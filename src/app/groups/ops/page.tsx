'use client';
import React from 'react';
import Link from 'next/link';
import { Megaphone, Github, Video, Mail, Globe, Link as LinkIcon, UserRound } from 'lucide-react';

export default function OpsPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-black text-white">
        <Link href="/" className="inline-block text-white/60 hover:text-white">← 返回首页</Link>

        <header className="mt-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 p-[2px]">
            <div className="h-full w-full rounded-[14px] bg-black p-2">
              <Megaphone className="h-full w-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">运营组</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            品牌形象、内容与赛事运营，赞助拓展与活动策划，打造团队统一对外形象。
          </p>
        </header>

        <section className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <Panel title="职责">
            <List items={['品牌与视觉规范', '内容生产与渠道投放', '活动策划与赞助合作']} />
          </Panel>
          <Panel title="技能栈">
            <Tags items={['Notion / 飞书', 'PR / AE / PS', '数据分析']} />
          </Panel>
          <Panel title="在招方向">
            <TagsStrong items={['品牌设计', '内容编辑', '活动执行']} />
          </Panel>
        </section>

        <section className="mx-auto mt-8 max-w-4xl">
          <h2 className="mb-3 text-sm font-semibold text-white/80">成员模板</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <MemberCard name="姓名 I" role="品牌设计" intro="搭建统一视觉系统与素材库，输出多端规范。" />
            <MemberCard name="姓名 J" role="内容编辑" intro="负责拍摄/剪辑与文案排版，提高内容转化率。" />
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 p-5">
          <h2 className="mb-3 text-sm font-semibold text-white/80">学习与入门资料</h2>
          <p className="mb-4 text-sm text-white/70">
            从品牌定位与视觉规范入手，建立内容生产流程与排期，再迭代渠道数据策略与合作流程。
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryLink href="https://github.com/F-E-v-e-r"><Github className="h-4 w-4" /> GitHub 组织</PrimaryLink>
            <GhostLink href="https://space.bilibili.com/3546615040182909?spm_id_from=333.337.0.0"><Video className="h-4 w-4" /> B站：内容合集</GhostLink>
            <GhostLink href="https://www.douyin.com/user/MS4wLjABAAAAFUa1v8ke5YrFnkvrRzodnRmvnL8fgUKuun6dkA8KriTUavjs_XZSAgW5w3e_TB8W?from_tab_name=main"><Globe className="h-4 w-4" /> 抖音：短视频</GhostLink>
            <GhostLink href="https://www.robomaster.com/zh-CN"><Globe className="h-4 w-4" /> RoboMaster 官网</GhostLink>
            <GhostLink href="mailto:FEver-RM@outlook.com"><Mail className="h-4 w-4" /> FEver-RM@outlook.com</GhostLink>
            <PrimaryLink href="https://www.wjx.cn/vm/e5X1rtd.aspx"><LinkIcon className="h-4 w-4" /> 报名表</PrimaryLink>
          </div>
        </section>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl bg-white/5 p-5"><div className="mb-3 text-sm font-semibold text-white/80">{title}</div>{children}</div>; }
function List({ items }: { items: string[] }) { return <ul className="space-y-2 text-sm text-white/80">{items.map((t)=>(<li key={t} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg白/50" /><span>{t}</span></li>))}</ul>; } // 注意：若报错将“bg白/50”改回 "bg-white/50"
function Tags({ items }: { items: string[] }) { return <div className="flex flex-wrap gap-2 text-xs">{items.map((t)=>(<span key={t} className="rounded-full bg-white/10 px-3 py-1">{t}</span>))}</div>; }
function TagsStrong({ items }: { items: string[] }) { return <div className="flex flex-wrap gap-2 text-xs">{items.map((t)=>(<span key={t} className="rounded-full bg-gradient-to-r from-white/15 to-white/10 px-3 py-1">{t}</span>))}</div>; }
function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 p-[1.5px]"><span className="rounded-[12px] bg-black px-3 py-1.5">{children}</span></a>; }
function GhostLink({ href, children }: { href: string; children: React.ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 hover:bg-white/15">{children}</a>; }
function MemberCard({ name, role, intro }: { name: string; role: string; intro: string }) { return (<div className="rounded-2xl bg-white/5 p-4"><div className="mb-3 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><UserRound className="h-5 w-5" /></div><div><div className="text-sm font-semibold">{name}</div><div className="text-xs text-white/60">{role}</div></div></div><p className="text-sm text-white/80">{intro}</p></div>); }
