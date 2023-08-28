import { it, expect } from "vitest"
import { calculateSummary } from "./calculateSummary.js"
import type { LanguageTag, LintReport, Message } from "@inlang/app"
import { createMessage } from "@inlang/test"

it("should return 100% when no translation are missing", () => {
	const messages: Message[] = [createMessage("test", { en: "test", de: "test" })]
	const languageTags: LanguageTag[] = ["en", "de"]
	const reports: LintReport[] = []
	const result = calculateSummary({
		reports,
		languageTags,
		messageIds: messages.map(({ id }) => id),
	})
	expect(result.percentage).toBe(100)
	expect(result.numberOfMissingVariants).toBe(0)
})

it("should return 50% when half of the messages are missing", () => {
	const messages: Message[] = [
		createMessage("message-1", { en: "test", de: "test" }),
		createMessage("message-2", { en: "test" }),
	]
	const languageTags: LanguageTag[] = ["en", "de"]
	const reports: LintReport[] = [
		{
			type: "MessageLint",
			messageId: "message-2",
			languageTag: "de",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
	]
	const result = calculateSummary({
		reports,
		languageTags,
		messageIds: messages.map(({ id }) => id),
	})
	expect(result.percentage).toBe(75)
	expect(result.numberOfMissingVariants).toBe(1)
})

it("should round the percentages", () => {
	const messages: Message[] = [
		createMessage("message-1", { en: "test", de: "test" }),
		createMessage("message-2", { en: "test" }),
		createMessage("message-3", { en: "test" }),
	]
	const languageTags: LanguageTag[] = ["en", "de"]
	const reports: LintReport[] = [
		{
			type: "MessageLint",
			messageId: "message-2",
			languageTag: "de",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
		{
			type: "MessageLint",
			messageId: "message-3",
			languageTag: "de",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
	]
	const result = calculateSummary({
		reports,
		languageTags,
		messageIds: messages.map(({ id }) => id),
	})
	expect(result.percentage).toBe(67)
	expect(result.numberOfMissingVariants).toBe(2)
})

it("should work with multiple resources", () => {
	const messages: Message[] = [
		createMessage("message-1", { en: "test", de: "test" }),
		createMessage("message-2", { en: "test", fr: "test" }),
		createMessage("message-3", { en: "test" }),
	]
	const languageTags: LanguageTag[] = ["en", "de", "fr"]
	const reports: LintReport[] = [
		{
			type: "MessageLint",
			messageId: "message-1",
			languageTag: "fr",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
		{
			type: "MessageLint",
			messageId: "message-2",
			languageTag: "de",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
		{
			type: "MessageLint",
			messageId: "message-3",
			languageTag: "fr",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
		{
			type: "MessageLint",
			messageId: "message-3",
			languageTag: "de",
			level: "warning",
			ruleId: "inlang.lintRule.missingTranslation",
			body: {
				en: "test",
			},
		},
	]
	const result = calculateSummary({
		reports,
		languageTags,
		messageIds: messages.map(({ id }) => id),
	})
	expect(result.percentage).toBe(56)
	expect(result.numberOfMissingVariants).toBe(4)
})
