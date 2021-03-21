public class AI {
    public String answer(String question) {
        String ret = null;
        ret = handleCanStart(question);
        if (ret != null) {
            return ret;
        }
        ret = handleAskTail(question);
        if (ret != null) {
            return ret;
        }
        return unKnown(question);
    }

    private String handleCanStart(String question) {
        String[] CanStart = new String[] {"会", "能", "有", "敢", "在"};
        for (int i = 0; i < CanStart.length; i++) {
            if (question.startsWith(CanStart[i])) {
                return CanStart[i] + "！" ;
            }
        }
        return null;
    }

    private String handleAskTail(String question) {
        String[] AskTail = new String[]{"吗 ", "吗", "吗？"};
        for (int i = 0; i < AskTail.length; i++) {
            if (question.endsWith(AskTail[i])) {
                return question.replace(AskTail[i], "!");
            }
        }
        return null;
    }

    private String unKnown(String question) {
        return question;
    }
}
